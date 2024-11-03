(()=>{"use strict";var A,n,t,e={742:(A,n,t)=>{var e=t(540),o=t(338),i=t(80);const a=function(){return new Promise((function(A,n){var t=document.createElement("link");t.rel="stylesheet",t.href="./styles/style.css",t.onload=function(){return A()},t.onerror=function(){return n(new Error("Failed to load CSS file"))},document.head.appendChild(t)})),e.createElement("h1",{className:"text-sm text-center bg-color-black text-white xs:text-black xs:bg-white"},"Hello world!")};t(71),(0,o.H)(document.getElementById("root")).render(e.createElement(i.Kd,{basename:"/"},e.createElement(a,null)))},71:(A,n,t)=>{var e=t(354),o=t.n(e),i=t(314),a=t.n(i),r=t(417),c=t.n(r),d=new URL(t(24),t.b),s=new URL(t(105),t.b),l=new URL(t(449),t.b),f=new URL(t(2),t.b),E=new URL(t(858),t.b),p=new URL(t(220),t.b),h=a()(o()),u=c()(d),b=c()(s),w=c()(l),m=c()(f),g=c()(E),B=c()(p);h.push([A.id,`*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.14 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \`sans\` font-family by default.\n5. Use the user's configured \`sans\` font-feature-settings by default.\n6. Use the user's configured \`sans\` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \`mono\` font-family by default.\n2. Use the user's configured \`mono\` font-feature-settings by default.\n3. Use the user's configured \`mono\` font-variation-settings by default.\n4. Correct the odd \`em\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \`inherit\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden="until-found"])) {\n  display: none;\n}\n    \n    @font-face {\n        font-family: iranSans;\n        font-weight: normal;\n        font-style: normal;\n        src: url(${u});\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 100;\n        font-style: normal;\n        src: url(${b});\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 200;\n        font-style: normal;\n        src: url(${w});\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 200;\n        font-style: normal;\n        src: url(${w});\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 300;\n        font-style: normal;\n        src: url(${m});\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 500;\n        font-style: normal;\n        src: url(${g});\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 800;\n        font-style: normal;\n        src: url(${B});\n        font-display: swap;\n    }\n@tailwind utilities;\n\n.bg-color-black{\n    background-color: #000;\n}\n.bg-color-white{\n    background-color: #fff;\n}\n\n.tooltip {\n  visibility: hidden;\n  position: absolute;\n}\n  \n  .has-tooltip:hover .tooltip {\n  visibility: visible;\n  z-index: 50;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n@media (min-width: 530px) {\n\n  .xs\\:bg-white {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  }\n\n  .xs\\:text-black {\n    --tw-text-opacity: 1;\n    color: rgb(0 0 0 / var(--tw-text-opacity));\n  }\n}`,"",{version:3,sources:["webpack://./styles/style.css"],names:[],mappings:"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",sourcesContent:["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n.bg-color-black{\n    background-color: #000;\n}\n.bg-color-white{\n    background-color: #fff;\n}\n\n.tooltip {\n    @apply invisible absolute;\n  }\n  \n  .has-tooltip:hover .tooltip {\n    @apply visible z-50;\n  }\n\n@tailwind utilities;\n\n@layer base {\n    \n    @font-face {\n        font-family: iranSans;\n        font-weight: normal;\n        font-style: normal;\n        src: url('../assets/fonts/iran-sans/IRANSansWeb.ttf');\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 100;\n        font-style: normal;\n        src: url('../assets/fonts/iran-sans/IRANSansWeb_UltraLight.ttf');\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 200;\n        font-style: normal;\n        src: url('../assets/fonts/iran-sans/IRANSansWeb_Light.ttf');\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 200;\n        font-style: normal;\n        src: url('../assets/fonts/iran-sans/IRANSansWeb_Light.ttf');\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 300;\n        font-style: normal;\n        src: url('../assets/fonts/iran-sans/IRANSansWeb_Medium.ttf');\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 500;\n        font-style: normal;\n        src: url('../assets/fonts/iran-sans/IRANSansWeb_Bold.ttf');\n        font-display: swap;\n    }\n\n    @font-face {\n        font-family: iranSans;\n        font-weight: 800;\n        font-style: normal;\n        src: url('../assets/fonts/iran-sans/IRANSansWeb_Black.ttf');\n        font-display: swap;\n    }\n}\n\n@layer utilities {\n    .ltr {\n        direction: ltr;\n    }\n    .rtl {\n        direction: rtl;\n    }\n\n    .B-Homa {\n        font-family: iranSans;\n        font-weight: 200;\n        font-style: normal;\n        src: url('../assets/fonts/BHoma/BHoma.ttf');\n        font-display: swap;\n    }\n\n    .drop-cap::first-letter {\n        @apply text-3xl font-bold float-left mr-3 text-color-theme;\n    }\n}"],sourceRoot:""}])},24:(A,n,t)=>{A.exports=t.p+"30ee3c0863897d81f92c.ttf"},220:(A,n,t)=>{A.exports=t.p+"57ad6d6688af34f8ae91.ttf"},858:(A,n,t)=>{A.exports=t.p+"eb38333f6b96ff1dc30a.ttf"},449:(A,n,t)=>{A.exports=t.p+"2b64937900326fc69f94.ttf"},2:(A,n,t)=>{A.exports=t.p+"e96320d7828b1c1aeb64.ttf"},105:(A,n,t)=>{A.exports=t.p+"376f003b8df7cfc4ce5e.ttf"}},o={};function i(A){var n=o[A];if(void 0!==n)return n.exports;var t=o[A]={id:A,exports:{}};return e[A](t,t.exports,i),t.exports}i.m=e,A=[],i.O=(n,t,e,o)=>{if(!t){var a=1/0;for(s=0;s<A.length;s++){for(var[t,e,o]=A[s],r=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((A=>i.O[A](t[c])))?t.splice(c--,1):(r=!1,o<a&&(a=o));if(r){A.splice(s--,1);var d=e();void 0!==d&&(n=d)}}return n}o=o||0;for(var s=A.length;s>0&&A[s-1][2]>o;s--)A[s]=A[s-1];A[s]=[t,e,o]},i.n=A=>{var n=A&&A.__esModule?()=>A.default:()=>A;return i.d(n,{a:n}),n},t=Object.getPrototypeOf?A=>Object.getPrototypeOf(A):A=>A.__proto__,i.t=function(A,e){if(1&e&&(A=this(A)),8&e)return A;if("object"==typeof A&&A){if(4&e&&A.__esModule)return A;if(16&e&&"function"==typeof A.then)return A}var o=Object.create(null);i.r(o);var a={};n=n||[null,t({}),t([]),t(t)];for(var r=2&e&&A;"object"==typeof r&&!~n.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((n=>a[n]=()=>A[n]));return a.default=()=>A,i.d(o,a),o},i.d=(A,n)=>{for(var t in n)i.o(n,t)&&!i.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:n[t]})},i.o=(A,n)=>Object.prototype.hasOwnProperty.call(A,n),i.r=A=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},i.p="/",(()=>{i.b=document.baseURI||self.location.href;var A={792:0};i.O.j=n=>0===A[n];var n=(n,t)=>{var e,o,[a,r,c]=t,d=0;if(a.some((n=>0!==A[n]))){for(e in r)i.o(r,e)&&(i.m[e]=r[e]);if(c)var s=c(i)}for(n&&n(t);d<a.length;d++)o=a[d],i.o(A,o)&&A[o]&&A[o][0](),A[o]=0;return i.O(s)},t=self.webpackChunkbuiler=self.webpackChunkbuiler||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var a=i.O(void 0,[806,80,583],(()=>i(742)));a=i.O(a)})();
//# sourceMappingURL=main.54deaff64620129fb288.js.map