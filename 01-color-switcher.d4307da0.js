!function(){var t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");t.addEventListener("click",(function(){a(!0),e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){a(!1),clearInterval(e)}));var e=null;function a(e){t.disabled=e,n.disabled=!e}}();
//# sourceMappingURL=01-color-switcher.d4307da0.js.map
