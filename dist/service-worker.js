if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const c=e=>i(e,r),u={module:{uri:r},exports:a,require:c};s[r]=Promise.all(n.map((e=>u[e]||c(e)))).then((e=>(l(...e),a)))}}define(["./workbox-27b4add1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/16.4abef689a959556ce577.js",revision:null},{url:"/160.494501e0378edbdcc3ad.js",revision:null},{url:"/280.0e76bfabf5fd754a40af.js",revision:null},{url:"/322.9154da92254205208005.js",revision:null},{url:"/330.550e0b445e0482a47ba5.js",revision:null},{url:"/364.12825a90782ce1799f7b.js",revision:null},{url:"/409.906e02bff0c7fcbeaa81.js",revision:null},{url:"/41.52deae4c3e0d191f6d3f.js",revision:null},{url:"/414.0854b2ce23fc5a421339.js",revision:null},{url:"/445.0b223a685bef3b8dfe28.js",revision:null},{url:"/478.1e186f5ed57fe7a2be25.js",revision:null},{url:"/490.f5c647e9f2f57654425b.js",revision:null},{url:"/551.cf945d8194229b664096.js",revision:null},{url:"/588.3bbce290db10a8601759.js",revision:null},{url:"/604.7cab4f54f9ebf4160045.js",revision:null},{url:"/609.cdcd4c7ab9c330587e68.js",revision:null},{url:"/635.11d159bbe0ecb0a77125.js",revision:null},{url:"/679.ae620a579d497c44598d.js",revision:null},{url:"/767.a1b71a677ae218fc665e.js",revision:null},{url:"/820.2c8ee2ba349768f64083.js",revision:null},{url:"/85844e0ca7f47950c7a0.json",revision:null},{url:"/976.36457eec925421926c0d.js",revision:null},{url:"/989.9d1d97a62c90b87a9358.js",revision:null},{url:"/assets/images/icon-144x144.png",revision:"e187970c163c10787a32e1f487e265f6"},{url:"/assets/images/icon-192x192.png",revision:"e4ca6c5b667a7678abdcbbf62d3f9238"},{url:"/assets/images/icon-36x36.png",revision:"0515f4965233393566b4b81bc5a8d9df"},{url:"/assets/images/icon-48x48.png",revision:"18e65b1a2327715482c5b4c1c5e8ac6c"},{url:"/assets/images/icon-512x512.png",revision:"35b62d12f8dcd424a35a3ac8ab02240b"},{url:"/assets/images/icon-72x72.png",revision:"624d0005f83aaaa98c382e2d20769a2c"},{url:"/assets/images/icon-96x96.png",revision:"52cf37374940ebcdc05b173c7a6fe522"},{url:"/icon-512x512.png",revision:"35b62d12f8dcd424a35a3ac8ab02240b"},{url:"/index.html",revision:"b0e014452f8e67f5e383eff9a68423da"},{url:"/main-5d3f7ed2.dffab15e02f2a7faaa41.js",revision:null},{url:"/main-c9c31c89.e9e0fc6b1e7e16946ad6.js",revision:null}],{}),e.registerRoute(/.*/,new e.StaleWhileRevalidate({cacheName:"all-resources",plugins:[]}),"GET")}));
