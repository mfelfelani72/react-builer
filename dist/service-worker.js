if(!self.define){let e,i={};const n=(n,l)=>(n=new URL(n+".js",l).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=e=>n(e,s),c={module:{uri:s},exports:o,require:u};i[s]=Promise.all(l.map((e=>c[e]||u(e)))).then((e=>(r(...e),o)))}}define(["./workbox-1f84e78b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/478.2565a37b3a44e2504dde.js",revision:null},{url:"/551.7dcef2de76037374d7eb.js",revision:null},{url:"/588.38cc34ba5e1d475f8652.js",revision:null},{url:"/694.c6f925fc3dded5a775ca.js",revision:null},{url:"/767.e839286a4a491f6e5a19.js",revision:null},{url:"/976.cebf3a08326da70f0488.js",revision:null},{url:"/index.html",revision:"31f543b39235e041b41c36151ab5de38"},{url:"/main-5d3f7ed2.cd7658cc2cb29d19219c.js",revision:null},{url:"/main-c9c31c89.1d7f2419af183b45a129.js",revision:null}],{})}));
