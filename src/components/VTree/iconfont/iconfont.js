(function(window){var svgSprite='<svg><symbol id="icon-checkbox" viewBox="0 0 1024 1024"><path d="M426.005333 725.994667l384-384-60.010667-61.994667-324.010667 324.010667-152-152-60.010667 60.010667zM810.005333 128q36.010667 0 60.992 26.005333t25.002667 60.010667l0 596.010667q0 34.005333-25.002667 60.010667t-60.992 26.005333l-596.010667 0q-36.010667 0-60.992-26.005333t-25.002667-60.010667l0-596.010667q0-34.005333 25.002667-60.010667t60.992-26.005333l596.010667 0z"  ></path></symbol><symbol id="icon-check-box" viewBox="0 0 1024 1024"><path d="M810.656 213.344v597.344H213.312V213.344h597.344z m0-85.344H213.312a85.6 85.6 0 0 0-85.344 85.344v597.344c0 46.944 38.4 85.344 85.344 85.344h597.344c46.944 0 85.344-38.4 85.344-85.344V213.344C896 166.4 857.6 128 810.656 128z"  ></path></symbol><symbol id="icon-banxuanzhong" viewBox="0 0 1026 1024"><path d="M804.651412 0H219.366115C98.221032 0 0.008763 98.311977 0.008763 219.556767V804.642648c0 121.244791 98.311977 219.357352 219.357352 219.357352h585.085881c121.244791 0 219.357352-98.311977 219.357352-219.357352V219.556767C1024.008763 98.311977 925.696787 0 804.651412 0z m-73.285297 585.185589h-438.714703c-40.381694 0-73.085881-32.704187-73.085881-73.085881s32.704187-73.085881 73.085881-73.085881h438.914119c40.381694 0 73.085881 32.704187 73.085881 73.085881s-32.704187 73.085881-73.285297 73.085881z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)