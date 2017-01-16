var myScroll;
function loaded() {
    myScroll = new IScroll('.iscroll-wrapper', {
      scrollX: true,
      scrollY: false,
      mouseWheel: true,
      deceleration: 0.0065
    });
}
