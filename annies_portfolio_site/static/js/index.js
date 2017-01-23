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
