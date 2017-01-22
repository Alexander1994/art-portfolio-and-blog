var Siema = require('siema');
new Siema({
  selector: '.carousel',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: false
});
