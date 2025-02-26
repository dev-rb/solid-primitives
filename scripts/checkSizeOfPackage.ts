import { buildSync } from "esbuild";
import { readFileSync, writeFileSync, rmSync } from "fs";
import { gzipSizeSync } from "gzip-size";
import { r } from "./utils";

const checkSizeOfPackage = async ({
  type,
  packageName,
  primitiveName,
  excludeGzipHeadersAndMetadataSize,
}: {
  type: "package" | "export";
  packageName: string;
  primitiveName: string;
  excludeGzipHeadersAndMetadataSize?: boolean;
}) => {
  const file = `
export { ${primitiveName} } from "./packages/${packageName}/src/index"
`;
  const fileName = "_temp_check_primitive_size.ts";
  const outDir = r("../_temp_output_primitive_size_dir");
  const outFile = `${outDir}/main.js`;
  const packagePath = r(`../packages/${packageName}/src/`);
  const packageIndexPath = `${packagePath}/index.ts`;
  const packageExportFilePath = r(`../${fileName}`);
  if (type === "export") {
    writeFileSync(packageExportFilePath, file);
  }

  buildSync({
    entryPoints: [type === "package" ? packageIndexPath : packageExportFilePath],
    outfile: outFile,
    target: ["esnext"],
    format: "esm",
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: "browser",
    external: ["solid-js", "node-fetch"],
  });

  const gzipHeadersAndMetadataSize = 20; // around 20 bytes
  const buffer = readFileSync(outFile);
  const minifiedSize = buffer.toString().length;
  const gzippedSize =
    gzipSizeSync(buffer) - (excludeGzipHeadersAndMetadataSize ? gzipHeadersAndMetadataSize : 0);
  if (type === "export") {
    rmSync(packageExportFilePath);
  }
  rmSync(outDir, { recursive: true });

  return {
    minifiedSize,
    gzippedSize,
  };
};

export default checkSizeOfPackage;
