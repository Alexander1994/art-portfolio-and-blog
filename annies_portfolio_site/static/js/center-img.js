(function setModalContentWidth() {
  'use strict';
  var content = document.getElementsByClassName('post-container-js')[0];
  var modalContent = document.getElementsByClassName('modal-content')[0];
  var contentWidth = content.getBoundingClientRect().width;
  modalContent.style.width = contentWidth +"px";
})();
