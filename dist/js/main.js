"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function t(t){return!t.nodeName||-1!==e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])}function o(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}var n=e.scrollTo=function(t,o,n){return e(window).scrollTo(t,o,n)};return n.defaults={axis:"xy",duration:0,limit:!0},e.fn.scrollTo=function(i,r,c){"object"===(void 0===r?"undefined":_typeof(r))&&(c=r,r=0),"function"==typeof c&&(c={onAfter:c}),"max"===i&&(i=9e9),c=e.extend({},n.defaults,c),r=r||c.duration;var l=c.queue&&1<c.axis.length;return l&&(r/=2),c.offset=o(c.offset),c.over=o(c.over),this.each(function(){function a(t){var o=e.extend({},c,{queue:!0,duration:r,complete:t&&function(){t.call(d,f,c)}});m.animate(v,o)}if(null!==i){var s,u=t(this),d=u?this.contentWindow||window:this,m=e(d),f=i,v={};switch(void 0===f?"undefined":_typeof(f)){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)){f=o(f);break}f=u?e(f):e(f,d);case"object":if(0===f.length)return;(f.is||f.style)&&(s=(f=e(f)).offset())}var y=e.isFunction(c.offset)&&c.offset(d,f)||c.offset;e.each(c.axis.split(""),function(e,t){var o="x"===t?"Left":"Top",i=o.toLowerCase(),r="scroll"+o,p=m[r](),h=n.max(d,t);s?(v[r]=s[i]+(u?0:p-m.offset()[i]),c.margin&&(v[r]-=parseInt(f.css("margin"+o),10)||0,v[r]-=parseInt(f.css("border"+o+"Width"),10)||0),v[r]+=y[i]||0,c.over[i]&&(v[r]+=f["x"===t?"width":"height"]()*c.over[i])):(o=f[i],v[r]=o.slice&&"%"===o.slice(-1)?parseFloat(o)/100*h:o),c.limit&&/^\d+$/.test(v[r])&&(v[r]=0>=v[r]?0:Math.min(v[r],h)),!e&&1<c.axis.length&&(p===v[r]?v={}:l&&(a(c.onAfterFirst),v={}))}),a(c.onAfter)}})},n.max=function(o,n){var i="scroll"+(r="x"===n?"Width":"Height");if(!t(o))return o[i]-e(o)[r.toLowerCase()]();var r="client"+r,c=(l=o.ownerDocument||o.document).documentElement,l=l.body;return Math.max(c[i],l[i])-Math.min(c[r],l[r])},e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){return e(t.elem)[t.prop]()},set:function(t){var o=this.get(t);if(t.options.interrupt&&t._last&&t._last!==o)return e(t.elem).stop();var n=Math.round(t.now);o!==n&&(e(t.elem)[t.prop](n),t._last=this.get(t))}},n}),document.addEventListener("DOMContentLoaded",function(){function e(){for(var t=document.querySelectorAll(".team-box"),o=document.querySelectorAll(".team .dots__item"),n=0;n<t.length;n++)t[n].style.display="none";for(var i=0;i<o.length;i++)o[i].className=o[i].className.replace(" dots__item--active","");++c>t.length&&(c=1),t[c-1].style.display="flex",o[c-1].className+=" dots__item--active",setTimeout(e,8e3)}function t(){for(var e=document.querySelectorAll(".clients-container"),o=document.querySelectorAll(".clients .dots__item"),n=0;n<e.length;n++)e[n].style.display="none";for(var i=0;i<o.length;i++)o[i].className=o[i].className.replace(" dots__item--active","");++l>e.length&&(l=1),e[l-1].style.display="flex",o[l-1].className+=" dots__item--active",setTimeout(t,4e3)}function o(){for(var e=document.querySelectorAll(".testimonials__box"),t=document.querySelectorAll(".testimonials .dots__item"),n=0;n<e.length;n++)e[n].style.display="none";for(var i=0;i<t.length;i++)t[i].className=t[i].className.replace(" dots__item--active","");++a>e.length&&(a=1),e[a-1].style.display="block",t[a-1].className+=" dots__item--active",setTimeout(o,5e3)}function n(){var e=s.value,t=document.querySelector(".name-comment");/^[a-zA-Z]{3,10}$/.test(e)?(s.classList.remove("incorrect-validation"),s.classList.add("correct-validation"),t.innerHTML="Correct name",t.style.color="green"):(s.classList.remove("correct-validation"),s.classList.add("incorrect-validation"),t.innerHTML="Name should contain at least 3 characters",t.style.color="red")}function i(){var e=u.value,t=document.querySelector(".email-comment");/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z_.-]+\.[a-zA-Z]{2,3}$/.test(e)?(u.classList.remove("incorrect-validation"),u.classList.add("correct-validation"),t.innerHTML="Correct email",t.style.color="green"):(u.classList.remove("correct-validation"),u.classList.add("incorrect-validation"),t.innerHTML="Incorrect email!",t.style.color="red")}function r(){var e=d.value,t=document.querySelector(".message-comment");""!==e?(d.classList.remove("incorrect-validation"),d.classList.add("correct-validation"),t.innerHTML="correct validation",t.style.color="green"):(d.classList.remove("correct-validation"),d.classList.add("incorrect-validation"),t.innerHTML="Write your message!",t.style.color="red")}$(".burger").click(function(){$(".navi").slideDown()}),$(".close").click(function(){$(".navi").slideUp()}),$(function(e){e("#homeLink").click(function(){e.scrollTo(e(".main-content"),500)}),e("#aboutLink").click(function(){e.scrollTo(e(".about"),800)}),e("#servicesLink").click(function(){e.scrollTo(e(".services"),1e3)}),e("#portfolioLink").click(function(){e.scrollTo(e(".work"),1200)}),e("#testiLink").click(function(){e.scrollTo(e(".testimonials"),1400)}),e("#contactLink").click(function(){e.scrollTo(e(".contact"),1600)}),e("#banner__btn").click(function(){e.scrollTo(e(".about"),500)})});var c=0,l=0,a=0;e(),t(),o(),$(".menu__filter .menu__item").on("click",function(e){e.preventDefault(),$(this).addClass(" active")});var s=document.querySelector("#name"),u=document.querySelector("#email"),d=document.querySelector("#message"),m=document.querySelector(".contact__btn");s.addEventListener("blur",n),u.addEventListener("blur",i),d.addEventListener("blur",r),m.addEventListener("click",function(){n(),i(),r()})});