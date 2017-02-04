var myScroll;
window.onload = function() {
    myScroll = new IScroll('.iscroll-wrapper', {
      scrollX: true,
      scrollY: false,
      mouseWheel: true,
      deceleration: 0.0065,
      tap: true
    });
}
