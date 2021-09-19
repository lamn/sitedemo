// Slidebar menu
document.addEventListener('DOMContentLoaded', () => {
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach( el => {
		el.addEventListener('click', () => {
			// Get the target from the "data-target" attribute
			const target = el.dataset.target;
			const $target = document.getElementById(target);
			// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
			el.classList.toggle('is-active');
			$target.classList.toggle('is-active');
		});
		});
	}
});
// Tabs
'use strict';
function Tabs() {
	var bindAll = function() {
		var menuElements = document.querySelectorAll('[data-tab]');
		for(var i = 0; i < menuElements.length ; i++) {
		menuElements[i].addEventListener('click', change, false);
		}
	}
	var clear = function() {
		var menuElements = document.querySelectorAll('[data-tab]');
		for(var i = 0; i < menuElements.length ; i++) {
		menuElements[i].classList.remove('is-active');
		var id = menuElements[i].getAttribute('data-tab');
		document.getElementById(id).classList.remove('is-active');
		}
	}
	var change = function(e) {
		clear();
		e.target.classList.add('is-active');
		var id = e.currentTarget.getAttribute('data-tab');
		document.getElementById(id).classList.add('is-active');
		e.preventDefault();
	}
	bindAll();
}
var connectTabs = new Tabs();

// Util 4.1.3
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):t.Util=e(t.jQuery)}(this,function(t){"use strict";return function(r){var e="transitionend";function t(t){var e=this,n=!1;return r(this).one(s.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||s.triggerTransitionEnd(e)},t),this}var s={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=r(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){r(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=n[r],o=e[r],u=o&&s.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(i).test(u))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+u+'" but expected type "'+i+'".')}var a}};return r.fn.emulateTransitionEnd=t,r.event.special[s.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(r(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},s}(t=t&&t.hasOwnProperty("default")?t.default:t)});
// Collapse 4.1.3
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Collapse=t(e.jQuery,e.Util)}(this,function(e,o){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(i){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{},t=Object.keys(l);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(l).filter(function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),t.forEach(function(e){var t,n,r;t=i,r=l[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return i}var c,a,g,t,n,u,h,f,d,_,m,p,y,v,C,A,s;return e=e&&e.hasOwnProperty("default")?e.default:e,o=o&&o.hasOwnProperty("default")?o.default:o,a="collapse",t="."+(g="bs.collapse"),n=(c=e).fn[a],u={toggle:!0,parent:""},h={toggle:"boolean",parent:"(string|element)"},f={SHOW:"show"+t,SHOWN:"shown"+t,HIDE:"hide"+t,HIDDEN:"hidden"+t,CLICK_DATA_API:"click"+t+".data-api"},d="show",_="collapse",m="collapsing",p="collapsed",y="width",v="height",C=".show, .collapsing",A='[data-toggle="collapse"]',s=function(){function s(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=c.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(A)),r=0,i=n.length;r<i;r++){var l=n[r],a=o.getSelectorFromElement(l),s=[].slice.call(document.querySelectorAll(a)).filter(function(e){return e===t});null!==a&&0<s.length&&(this._selector=a,this._triggerArray.push(l))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e,t,n,r=s.prototype;return r.toggle=function(){c(this._element).hasClass(d)?this.hide():this.show()},r.show=function(){var e,t,n=this;if(!this._isTransitioning&&!c(this._element).hasClass(d)&&(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(C)).filter(function(e){return e.getAttribute("data-parent")===n._config.parent})).length&&(e=null),!(e&&(t=c(e).not(this._selector).data(g))&&t._isTransitioning))){var r=c.Event(f.SHOW);if(c(this._element).trigger(r),!r.isDefaultPrevented()){e&&(s._jQueryInterface.call(c(e).not(this._selector),"hide"),t||c(e).data(g,null));var i=this._getDimension();c(this._element).removeClass(_).addClass(m),this._element.style[i]=0,this._triggerArray.length&&c(this._triggerArray).removeClass(p).attr("aria-expanded",!0),this.setTransitioning(!0);var l="scroll"+(i[0].toUpperCase()+i.slice(1)),a=o.getTransitionDurationFromElement(this._element);c(this._element).one(o.TRANSITION_END,function(){c(n._element).removeClass(m).addClass(_).addClass(d),n._element.style[i]="",n.setTransitioning(!1),c(n._element).trigger(f.SHOWN)}).emulateTransitionEnd(a),this._element.style[i]=this._element[l]+"px"}}},r.hide=function(){var e=this;if(!this._isTransitioning&&c(this._element).hasClass(d)){var t=c.Event(f.HIDE);if(c(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",o.reflow(this._element),c(this._element).addClass(m).removeClass(_).removeClass(d);var r=this._triggerArray.length;if(0<r)for(var i=0;i<r;i++){var l=this._triggerArray[i],a=o.getSelectorFromElement(l);if(null!==a)c([].slice.call(document.querySelectorAll(a))).hasClass(d)||c(l).addClass(p).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var s=o.getTransitionDurationFromElement(this._element);c(this._element).one(o.TRANSITION_END,function(){e.setTransitioning(!1),c(e._element).removeClass(m).addClass(_).trigger(f.HIDDEN)}).emulateTransitionEnd(s)}}},r.setTransitioning=function(e){this._isTransitioning=e},r.dispose=function(){c.removeData(this._element,g),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},r._getConfig=function(e){return(e=l({},u,e)).toggle=Boolean(e.toggle),o.typeCheckConfig(a,e,h),e},r._getDimension=function(){return c(this._element).hasClass(y)?y:v},r._getParent=function(){var n=this,e=null;o.isElement(this._config.parent)?(e=this._config.parent,void 0!==this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var t='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(e.querySelectorAll(t));return c(r).each(function(e,t){n._addAriaAndCollapsedClass(s._getTargetFromElement(t),[t])}),e},r._addAriaAndCollapsedClass=function(e,t){if(e){var n=c(e).hasClass(d);t.length&&c(t).toggleClass(p,!n).attr("aria-expanded",n)}},s._getTargetFromElement=function(e){var t=o.getSelectorFromElement(e);return t?document.querySelector(t):null},s._jQueryInterface=function(r){return this.each(function(){var e=c(this),t=e.data(g),n=l({},u,e.data(),"object"==typeof r&&r?r:{});if(!t&&n.toggle&&/show|hide/.test(r)&&(n.toggle=!1),t||(t=new s(this,n),e.data(g,t)),"string"==typeof r){if(void 0===t[r])throw new TypeError('No method named "'+r+'"');t[r]()}})},e=s,n=[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return u}}],(t=null)&&i(e.prototype,t),n&&i(e,n),s}(),c(document).on(f.CLICK_DATA_API,A,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=c(this),t=o.getSelectorFromElement(this),r=[].slice.call(document.querySelectorAll(t));c(r).each(function(){var e=c(this),t=e.data(g)?"toggle":n.data();s._jQueryInterface.call(e,t)})}),c.fn[a]=s._jQueryInterface,c.fn[a].Constructor=s,c.fn[a].noConflict=function(){return c.fn[a]=n,s._jQueryInterface},s});

// Other
$(".func-search").click(function(){
	$(this).addClass("is-hidden");
	$(".func-close-search").removeClass("is-hidden");
	$(".navbar-search").removeClass("is-hidden");
	$("#input-search").focus();
});
$(".func-close-search").click(function(){
	$(this).addClass("is-hidden");
	$(".func-search").removeClass("is-hidden");
	$(".navbar-search").addClass("is-hidden");
});
$(".func-modal-register").click(function(){
	$(".modal").addClass("is-active");
});
$(".func-close-modal").click(function(){
	$(".modal").removeClass("is-active");
});
