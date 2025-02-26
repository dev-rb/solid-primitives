import { ParentComponent } from "solid-js";

const Heading: ParentComponent = props => {
  return (
    <div class="text-3xl sm:text-4xl font-bold capitalize">
      <div class="@container/heading relative container-s mb-[-60px]">
        <div aria-hidden="true" style="visibility: hidden;">
          {props.children}
        </div>
        <svg
          class="absolute hidden @[290px]/heading:block"
          viewBox="0 0 88.975 79.46"
          // @ts-ignore
          xml:space="preserve"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          style="z-index: 1; right: -159px; width: 247px; pointer-events: none; bottom: -89px;"
        >
          <use href="#solid-blocks-header-cluster-e" transform="translate(-30 -26)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-45 -17)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-16 -16.5)" />
        </svg>
        <svg
          class="absolute sm:hidden"
          viewBox="0 0 88.975 79.46"
          // @ts-ignore
          xml:space="preserve"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          style="z-index: 1; right: -157px; width: 247px; pointer-events: none; bottom: -92px;"
        >
          <use
            opacity="0.8"
            href="#solid-blocks-header-cluster-e"
            transform="translate(-16 -16.5)"
          />
        </svg>
      </div>
      <div class="relative">
        <svg
          class="absolute top-0 left-0"
          viewBox="0 0 88.975 79.46"
          // @ts-ignore
          xml:space="preserve"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          style="z-index: 2; left: -152px; width: 247px; top: 1px; pointer-events: none;"
        >
          <use href="#solid-blocks-header-cluster-e" transform="translate(-18 -24)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-33 -14)" />
        </svg>
        <svg
          class="absolute top-0 left-0"
          viewBox="0 0 88.975 79.46"
          // @ts-ignore
          xml:space="preserve"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          style="z-index: 1; left: -239px; width: 247px; top: -78px; pointer-events: none;"
        >
          <use href="#solid-blocks-header-cluster-e" transform="translate(-44 1)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-31 -22.2)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-46 -13.2)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-16.2 -13.3)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-31 -4.2)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(13 -13.3)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-1.5 -4.3)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-16.2 4.7)" />
        </svg>
        {/* <svg
          class="absolute top-0 left-0 opacity-80"
          viewBox="0 0 88.975 79.46"
          xml:space="preserve"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          style="z-index: 0; left: -97px; width: 247px; top: -65px; pointer-events: none;"
        >
          <use href="#solid-blocks-header-cluster-e" transform="translate(-1.5 -4.3)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-16.2 4.7)" />
        </svg> */}
        <svg
          class="absolute top-0 left-0"
          viewBox="0 0 88.975 79.46"
          // @ts-ignore
          xml:space="preserve"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          style="z-index: 5; left: -239px; width: 247px; top: -120px; pointer-events: none;"
        >
          <use href="#solid-blocks-header-cluster-e" transform="translate(-30 -26)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-45 -17)" />
          <use href="#solid-blocks-header-cluster-e" transform="translate(-16 -16.5)" />
        </svg>
        <svg
          class="absolute"
          viewBox="0 0 88.975 79.46"
          // @ts-ignore
          xml:space="preserve"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          style="z-index: 0; right: -40.5px; width: 247px; top: 0px; pointer-events: none;"
        >
          <g transform="translate(11.5 -32.1)">
            <path
              d="m902.479-260.051-11.198 6.465a1.09 1.09 0 0 0 0 1.888l11.198 6.464a3.27 3.27 0 0 0 3.27 0l11.197-6.464a1.09 1.09 0 0 0 0-1.888l-11.197-6.465a3.27 3.27 0 0 0-3.27 0z"
              transform="translate(-753.562 279.827) scale(.89973)"
              opacity=".352"
              fill="url(#solid-blocks-header-cluster-f)"
              filter="url(#solid-blocks-header-cluster-g)"
            />
            <path
              d="M918.917-274.533a3.27 3.27 0 0 0-1.635.438l-7.578 4.376h-4.165v3.033h.007a1.09 1.09 0 0 0 .538.944l11.198 6.465a3.27 3.27 0 0 0 3.27 0l11.197-6.465a1.09 1.09 0 0 0 .541-1.006h.002v-2.971h-4.162l-7.578-4.376a3.27 3.27 0 0 0-1.635-.438z"
              fill="url(#solid-blocks-header-cluster-j)"
              transform="translate(-859.018 314.327)"
            />
            <path
              d="m917.282-277.066-11.198 6.465a1.09 1.09 0 0 0 0 1.888l11.198 6.464a3.27 3.27 0 0 0 3.27 0l11.197-6.464a1.09 1.09 0 0 0 0-1.888l-11.197-6.465a3.27 3.27 0 0 0-3.27 0z"
              fill="url(#solid-blocks-header-cluster-k)"
              transform="translate(-859.018 314.327)"
            />
          </g>
        </svg>
        <svg
          class="absolute"
          viewBox="0 0 16.57 79.46"
          // @ts-ignore
          xml:space="preserve"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          style="z-index: 1; left: -37.5px; width: 46px; top: 0px; pointer-events: none;"
        >
          <g transform="translate(-43.3 -32.2)">
            <path
              d="M918.917-274.533a3.27 3.27 0 0 0-1.635.438l-7.578 4.376h-4.165v3.033h.007a1.09 1.09 0 0 0 .538.944l11.198 6.465a3.27 3.27 0 0 0 3.27 0l11.197-6.465a1.09 1.09 0 0 0 .541-1.006h.002v-2.971h-4.162l-7.578-4.376a3.27 3.27 0 0 0-1.635-.438z"
              fill="url(#solid-blocks-header-cluster-j)"
              transform="translate(-859.018 314.327)"
            />
            <path
              d="m917.282-277.066-11.198 6.465a1.09 1.09 0 0 0 0 1.888l11.198 6.464a3.27 3.27 0 0 0 3.27 0l11.197-6.464a1.09 1.09 0 0 0 0-1.888l-11.197-6.465a3.27 3.27 0 0 0-3.27 0z"
              fill="url(#solid-blocks-header-cluster-k)"
              transform="translate(-859.018 314.327)"
            />
          </g>
        </svg>
        <svg
          class="absolute"
          viewBox="0 0 88.975 79.46"
          // @ts-ignore
          xml:space="preserve"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          style="z-index: 0; left: -37.5px; width: 247px; top: 0px; pointer-events: none;"
        >
          <g transform="translate(-43.3 -32.2)">
            <path
              d="m902.479-260.051-11.198 6.465a1.09 1.09 0 0 0 0 1.888l11.198 6.464a3.27 3.27 0 0 0 3.27 0l11.197-6.464a1.09 1.09 0 0 0 0-1.888l-11.197-6.465a3.27 3.27 0 0 0-3.27 0z"
              transform="translate(-753.562 279.827) scale(.89973)"
              opacity=".352"
              fill="url(#solid-blocks-header-cluster-f)"
              filter="url(#solid-blocks-header-cluster-g)"
            />
          </g>
        </svg>
        <div class="absolute top-[10px] left-[8px] right-[8px]">
          <div class="relative top-[3px] w-full h-[43.63px] bg-[linear-gradient(to_right,#f5f7ff,#f5f7ff)] dark:bg-[linear-gradient(to_right,#2a3d4b,#2b3c4b)]" />
          <div class="w-full h-[11px] bg-[linear-gradient(to_right,#dbe0f2,#d7ddf2)] dark:bg-[linear-gradient(to_right,#263544,#263442)] box-shadow-[0px_6px_17px_0px_#c4d3f4] dark:box-shadow-[0px_6px_17px_0px_#202d3b]" />
        </div>
        <h1 class="absolute bottom-[-40px] left-0 z-1">{props.children}</h1>
        <div class="relative z-1">
          <div aria-hidden="true" class="h-0 p-0 m-0" style="visibility: hidden;">
            {props.children}
          </div>
          <div
            class="absolute top-[32px] left-0 pointer-events-none text-[#4b6a87] dark:text-[#8a9fb5] -scale-y-100 blur-[2px] mask-image-[linear-gradient(to_bottom,transparent,#000)] select-none opacity-[0.35] dark:opacity-30 z-1"
            aria-hidden="true"
            style="-webkit-mask-size: 100% 22px; -webkit-mask-repeat: no-repeat; -webkit-mask-position: bottom; mask-size: 100% 22px; mask-repeat: no-repeat; mask-position: bottom;"
          >
            {props.children}
          </div>
        </div>
      </div>
      <div aria-hidden="true" class="mb-[-40px] max-h-[80px]" style="visibility: hidden;">
        {props.children}
      </div>
    </div>
  );
};

export default Heading;
