if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const a=e=>i(e,r),o={module:{uri:r},exports:l,require:a};s[r]=Promise.all(n.map((e=>o[e]||a(e)))).then((e=>(c(...e),l)))}}define(["./workbox-27b4add1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/160.a611eaf404210766f24e.js",revision:null},{url:"/322.19f3969ad05601c3922e.js",revision:null},{url:"/551.7dcef2de76037374d7eb.js",revision:null},{url:"/588.38cc34ba5e1d475f8652.js",revision:null},{url:"/635.124a0fca0b0c4a44fb3c.js",revision:null},{url:"/679.d8323fca867bca4dee8e.js",revision:null},{url:"/706.a7ef9e88e1e00c885365.js",revision:null},{url:"/767.e839286a4a491f6e5a19.js",revision:null},{url:"/85844e0ca7f47950c7a0.json",revision:null},{url:"/976.cebf3a08326da70f0488.js",revision:null},{url:"/assets/images/icon-144x144.png",revision:"e187970c163c10787a32e1f487e265f6"},{url:"/assets/images/icon-192x192.png",revision:"e4ca6c5b667a7678abdcbbf62d3f9238"},{url:"/assets/images/icon-36x36.png",revision:"0515f4965233393566b4b81bc5a8d9df"},{url:"/assets/images/icon-48x48.png",revision:"18e65b1a2327715482c5b4c1c5e8ac6c"},{url:"/assets/images/icon-512x512.png",revision:"35b62d12f8dcd424a35a3ac8ab02240b"},{url:"/assets/images/icon-72x72.png",revision:"624d0005f83aaaa98c382e2d20769a2c"},{url:"/assets/images/icon-96x96.png",revision:"52cf37374940ebcdc05b173c7a6fe522"},{url:"/icon-512x512.png",revision:"35b62d12f8dcd424a35a3ac8ab02240b"},{url:"/index.html",revision:"2b2508cd05c81ce0031f38218f1619e9"},{url:"/main-5d3f7ed2.6d32c08cf41db67a431d.js",revision:null},{url:"/main-c9c31c89.dcdac57bd642336d9fe8.js",revision:null}],{}),e.registerRoute(/.*/,new e.StaleWhileRevalidate({cacheName:"all-resources",plugins:[]}),"GET")}));
