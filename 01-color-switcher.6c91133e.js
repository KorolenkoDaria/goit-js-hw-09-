!function(){var t={page:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},n=null;function e(n,e){t.startBtn.disabled=n,t.stopBtn.disabled=e}t.startBtn.addEventListener("click",(function(a){e(!0,!1),n=setInterval((function(){a="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.page.style.backgroundColor=a}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),e(!1,!0)}))}();
//# sourceMappingURL=01-color-switcher.6c91133e.js.map
