import{c,i as s,d as l,t as n}from"./index-27002a3c.js";import{a as i}from"./index-a2ac2f23.js";const d=n("<p>ID: </p>"),p=n('<button class="btn">update id</button>'),u=n("<h3></h3>"),_=()=>{const[r,a]=c(1),o=i(async t=>{try{return(await(await fetch(`https://swapi.dev/api/people/${r()}/`)).json()).name||t}catch{return t}});return[(()=>{const t=d.cloneNode(!0);return t.firstChild,s(t,r,null),t})(),(()=>{const t=p.cloneNode(!0);return t.$$click=()=>a(e=>e+1),t})(),(()=>{const t=u.cloneNode(!0);return s(t,()=>o()+""),t})()]};l(["click"]);export{_ as default};
