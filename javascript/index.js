jQuery(document).ready(function(){

/*
* タップ、スワイプ、指を離した時のイベントハンドラ
*/
$(“#touch”).bind(“touchstart”, TouchStart);
$(“#touch”).bind(“touchmove” , TouchMove);
$(“#touch”).bind(“touchend” , TouchLeave);

/*
* タップした位置をメモリーする
*/
function TouchStart( event ) {
$(“#event”).html(‘タップしました’);
var pos = Position(event);
$(“#touch”).data(“memory”,pos.x);
}

/*
* スワイプ
* タップした位置からプラスかマイナスかで左右移動を判断
*/
function TouchMove( event ) {
var pos = Position(event); //X,Yを得る

if( pos.x < $(“#touch”).data(“memory”) ){
$(“#event”).html(‘左に移動’);
}else{
$(“#event”).html(‘右に移動’);
}

$(“#leave”).html(‘移動距離 X=’+pos.x+’ , Y=’+pos.y);
}

/*
* 指を離す
*/
function TouchLeave( event ) {
$(“#event”).html(‘指を離しました’);
}

/*
* 現在位置を得る
*/
function Position(e){
var x = e.originalEvent.touches[0].pageX;
var y = e.originalEvent.touches[0].pageY;
x = Math.floor(x);
y = Math.floor(y);
var pos = {‘x’:x , ‘y’:y};
return pos;
}

});
