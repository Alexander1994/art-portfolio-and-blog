var Siema = require('siema');
var defferImg = require('./defferImg');
var setModalContentWidth = require('./setModalContentWidth');
var IScroll = require('iscroll');
var myScroll;

setModalContentWidth();
defferImg();

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

window.onload = function() {
    myScroll = new IScroll('.iscroll-wrapper', {
      scrollX: true,
      scrollY: false,
      mouseWheel: true,
      deceleration: 0.0065,
      tap: true
    });
}

var isPortfolio = document.getElementsByClassName('blog').length === 0;
if (isPortfolio) {
  document.getElementsByClassName('arrow-container-left-js')[0].addEventListener('click', function() {
    siema.prev();
  });

  document.getElementsByClassName('arrow-container-right-js')[0].addEventListener('click', function() {
    siema.next();
  });
}

var modal = document.getElementsByClassName('modal')[0];

modal.addEventListener('click', function(event) {
  if (event.target.className === "modal") {
    this.style.visibility = 'hidden';
  }
});

Siema.prototype.addImgPagination = function () {
  var si = this;
  document.getElementsByClassName('stream-js')[0].addEventListener('tap', function(event) {
    var index = event.target.getAttribute('data-index') || event.target.children[0].getAttribute('data-index');
    if (index) {
      document.getElementsByClassName('modal')[0].style.visibility = "visible";
      si.goTo(index);
    }
  });
};

siema.addImgPagination();
