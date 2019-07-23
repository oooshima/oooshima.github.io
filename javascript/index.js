$(function(){
  $('#back').on( 'swipe', mySwipeHandler );
  function mySwipeHandler( evt ){
    alert( '#myimg swiped.' );
  }
});
