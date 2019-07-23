$(function(){
  $('#back').on( 'swipe', mySwipeHandler );
  function mySwipeHandler( evt ){
    alert( '#myimg swiped.' );
  }

/*window.onload = function() {
  target = 66;
  if (target.webkitRequestFullscreen) {
    target.webkitRequestFullscreen();
  }
  //FF10+
  else if (target.mozRequestFullScreen) {
    target.mozRequestFullScreen();
  }
  //IE11+
  else if (target.msRequestFullscreen) {
    target.msRequestFullscreen();
  }
  // HTML5 Fullscreen API仕様
  else if (target.requestFullscreen) {
    target.requestFullscreen();
  }
  // 未対応
  else {
    alert('ご利用のブラウザはフルスクリーン操作に対応していません');
  }
}*/
});
