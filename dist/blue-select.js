function e(e){return e.replace(/ {1,}/g,",").split(",")}function t(e){if(!e)return!1;var t=e.className.split(" ")[0]||"custom-select";this.el=e,this.select=e.querySelector("select"),this.selectValue=document.createElement("div"),this.selectValue.className=t+"__value",this.selectArrow=document.createElement("div"),this.selectArrow.className=t+"__arrow",this.el.appendChild(this.selectValue),this.el.appendChild(this.selectArrow),this.setFakeValue(),this.onChange=this.onChange.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),this.select.addEventListener("change",this.onChange,!1),this.select.addEventListener("focus",this.onFocus,!1),this.select.addEventListener("blur",this.onBlur,!1)}t.prototype.onChange=function(){this.setFakeValue()},t.prototype.onFocus=function(){e(this.el.className).indexOf("is-focused")>-1||(this.el.className+=" is-focused")},t.prototype.onBlur=function(){var t;e(this.el.className).indexOf("is-focused")>-1&&(this.el.className=(t="is-focused",e(this.el.className).filter(function(e){return e!==t&&""!==e}).join(" ")))},t.prototype.getSelectedOptionText=function(){return this.select.querySelectorAll("option")[-1===this.select.selectedIndex?0:this.select.selectedIndex].textContent},t.prototype.setFakeValue=function(){this.selectValue.innerHTML=this.getSelectedOptionText()},module.exports=t;
//# sourceMappingURL=blue-select.js.map
