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
