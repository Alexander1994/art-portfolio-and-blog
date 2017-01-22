var imgs = document.getElementsByClassName('center-img-container-js');

(function setModalContentWidth() {
  'use strict';
  var content = document.getElementsByClassName('post-container')[0];
  var modalContent = document.getElementsByClassName('modal-content')[0];
  var contentWidth = content.getBoundingClientRect().width;
  modalContent.style.width = contentWidth +"px";
})();

(function centerImage() {
  'use strict';
  var imgs = document.getElementsByClassName('center-img-js');
  var imgContainers = document.getElementsByClassName('center-img-container-js');

  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i], imgContainer = imgContainers[i];
    var imgDim = imgs[i].getBoundingClientRect();
    var imgContainerDim = imgContainers[i].getBoundingClientRect();

    if (imgDim.width == imgContainerDim.width) {
      var imgMarg = (imgContainerDim.height - imgDim.height)/2;
      img.style.marginTop = imgMarg + "px";
    }
    if (imgDim.height == imgContainerDim.height) {
      var imgMarg = (imgContainerDim.width - imgDim.width)/2;
      img.style.marginLeft = imgMarg + "px";
    }
  }
}());
