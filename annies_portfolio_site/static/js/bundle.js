(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Siema = require('siema');

var siema = new Siema({
  selector: '.carousel',
  duration: 0,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: false,
  threshold: 20,
  loop: true
});

document.getElementsByClassName('arrow-container-left-js')[0].addEventListener('click', function() {
  siema.prev();
});

document.getElementsByClassName('arrow-container-right-js')[0].addEventListener('click', function() {
  siema.next();
});

var modal = document.getElementsByClassName('modal')[0];

modal.addEventListener('click', function(event) {
  if (event.target.className === "modal") {
    this.style.visibility = 'hidden';
  }
});

Siema.prototype.addImgPagination = function () {
  var si = this;
  document.getElementsByClassName('stream-js')[0].addEventListener('tap', function(event) {
    var index = event.target.getAttribute('data-index');
    if (index) {
      document.getElementsByClassName('modal')[0].style.visibility = "visible";
      si.goTo(index);
    }
  });
};

siema.addImgPagination();

},{"siema":2}],2:[function(require,module,exports){
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){function t(e){var t=this;this.config=s({selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,threshold:20,loop:!1},e),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,this.selectorWidth=this.selector.getBoundingClientRect().width,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.startIndex,this.init(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler"].forEach(function(e){t[e]=t[e].bind(t)}),window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={start:0,end:0},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler,{passive:!0}),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler))}var i=function(){var e=document.documentElement.style;return"string"==typeof e.transform?"transform":"WebkitTransform"}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++)for(var i in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],i)&&(e[i]=arguments[t][i]);return e};t.prototype.init=function(){if(null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selector.style.overflow="hidden",this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.sliderFrame.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++)this.innerElements[t].style.cssFloat="left",this.innerElements[t].style.float="left",this.innerElements[t].style.width=100/this.innerElements.length+"%",e.appendChild(this.innerElements[t]);this.sliderFrame.appendChild(e),this.selector.appendChild(this.sliderFrame),this.slideToCurrent()},t.prototype.resolveSlidesNumber=function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===_typeof(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>e&&(this.perPage=this.config.perPage[e])}},t.prototype.prev=function(){0===this.currentSlide&&this.config.loop?this.currentSlide=this.innerElements.length-this.perPage:this.currentSlide=Math.max(this.currentSlide-1,0),this.slideToCurrent()},t.prototype.next=function(){this.currentSlide===this.innerElements.length-this.perPage&&this.config.loop?this.currentSlide=0:this.currentSlide=Math.min(this.currentSlide+1,this.innerElements.length-this.perPage),this.slideToCurrent()},t.prototype.goTo=function(e){this.currentSlide=Math.min(Math.max(e,0),this.innerElements.length-1),this.slideToCurrent()},t.prototype.slideToCurrent=function(){this.sliderFrame.style[i]="translate3d(-"+this.currentSlide*(this.selectorWidth/this.perPage)+"px, 0, 0)"},t.prototype.updateAfterDrag=function(){var e=this.drag.end-this.drag.start;e>0&&Math.abs(e)>this.config.threshold?this.prev():e<0&&Math.abs(e)>this.config.threshold&&this.next(),this.slideToCurrent()},t.prototype.resizeHandler=function(){this.resolveSlidesNumber(),this.selectorWidth=this.selector.getBoundingClientRect().width,this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.slideToCurrent()},t.prototype.clearDrag=function(){this.drag={start:0,end:0}},t.prototype.touchstartHandler=function(e){e.stopPropagation(),this.pointerDown=!0,this.drag.start=e.touches[0].pageX},t.prototype.touchendHandler=function(e){e.stopPropagation(),this.pointerDown=!1,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.end&&this.updateAfterDrag(),this.clearDrag()},t.prototype.touchmoveHandler=function(e){e.stopPropagation(),this.pointerDown&&(this.drag.end=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[i]="translate3d("+(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.start-this.drag.end))*-1+"px, 0, 0)")},t.prototype.mousedownHandler=function(e){e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.start=e.pageX},t.prototype.mouseupHandler=function(e){e.stopPropagation(),this.pointerDown=!1,this.sliderFrame.style.cursor="-webkit-grab",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.end&&this.updateAfterDrag(),this.clearDrag()},t.prototype.mousemoveHandler=function(e){e.preventDefault(),this.pointerDown&&(this.drag.end=e.pageX,this.sliderFrame.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[i]="translate3d("+(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.start-this.drag.end))*-1+"px, 0, 0)")},t.prototype.mouseleaveHandler=function(e){this.pointerDown&&(this.pointerDown=!1,this.sliderFrame.style.cursor="-webkit-grab",this.drag.end=e.pageX,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.updateAfterDrag(),this.clearDrag())},t.prototype.destroy=function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler)},"undefined"!=typeof module&&module.exports?module.exports=t:e.Siema=t}(window);

},{}]},{},[1]);
