if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=e=>n(e,s),t={module:{uri:s},exports:o,require:u};i[s]=Promise.all(r.map((e=>t[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-1f84e78b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/478.1ee007ce876f2900c693.js",revision:null},{url:"/551.7dcef2de76037374d7eb.js",revision:null},{url:"/588.38cc34ba5e1d475f8652.js",revision:null},{url:"/694.c6f925fc3dded5a775ca.js",revision:null},{url:"/767.e839286a4a491f6e5a19.js",revision:null},{url:"/976.cebf3a08326da70f0488.js",revision:null},{url:"/index.html",revision:"5676f594f66b17357bef7361fa9ae2ba"},{url:"/main.982c2ee95d572c9bc8a8.js",revision:null}],{})}));
