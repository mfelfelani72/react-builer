if(!self.define){let e,n={};const l=(l,i)=>(l=new URL(l+".js",i).href,n[l]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=n,document.head.appendChild(e)}else e=l,importScripts(l),n()})).then((()=>{let e=n[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let c={};const u=e=>l(e,s),o={module:{uri:s},exports:c,require:u};n[s]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(r(...e),c)))}}define(["./workbox-27b4add1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/322.19f3969ad05601c3922e.js",revision:null},{url:"/551.7dcef2de76037374d7eb.js",revision:null},{url:"/588.38cc34ba5e1d475f8652.js",revision:null},{url:"/635.124a0fca0b0c4a44fb3c.js",revision:null},{url:"/679.d8323fca867bca4dee8e.js",revision:null},{url:"/706.b0eb7150d3949b95867c.js",revision:null},{url:"/767.e839286a4a491f6e5a19.js",revision:null},{url:"/85844e0ca7f47950c7a0.json",revision:null},{url:"/976.cebf3a08326da70f0488.js",revision:null},{url:"/icon-512x512.png",revision:"35b62d12f8dcd424a35a3ac8ab02240b"},{url:"/index.html",revision:"f475e0d43bf9d03f9d0a880727cec2b0"},{url:"/main-5d3f7ed2.c932ca6d4c089ff9d685.js",revision:null},{url:"/main-c9c31c89.4a41737e167b62aa9503.js",revision:null}],{}),e.registerRoute(/.*/,new e.StaleWhileRevalidate({cacheName:"all-resources",plugins:[]}),"GET")}));
