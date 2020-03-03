let point = 0;
let level = 0;
let timergo = 300;

let lfID = 1
let riID = 1
let typeID = 'r'
let setID = 1
//=====================================================
$(".tasks-wrapper").sortable({
   connectWith:".tasks-wrapper"
 }).disableSelection();
$("#drop_left").sortable({
  deactivate: function(event, ui) {drop_target()},
})
//======================================================
function paste_drop(){

  $('#drop_left').empty()
  $('#drop_right').empty()

  for (var i = 1; i <= 5; i++) {
      $('#drop_left').append(`<div class="task bg-secondary" id='lf${i}'></div>`)
      $('#drop_right').append(`<div class="task bg-secondary" id='ri${i}'></div>`)
    }
}
//======================================================
function create_drop(){

  paste_drop()

  lfID = randInt(1,5);
  riID = randInt(1,5);
  let rand = randInt(1,3);

  if ( rand == 1){
    $(`#lf${lfID}`).attr('class','task bg-primary')
    $(`#ri${riID}`).attr('class','task bg-success')
    typeID = 'r'
    setID = $(`#lf${riID}`).index()
  }
  else {
    $(`#ri${riID}`).attr('class','task bg-primary')
    $(`#lf${lfID}`).attr('class','task bg-success')
    typeID = 'l'
    setID = $(`#lf${lfID}`).index()
  }
}
//======================================================
function drop_target(){

   if (typeID == 'r'){
     console.log(setID,  $(`#lf${lfID}`).index())
     if ($(`#lf${lfID}`).index()-1 == setID) {point++}
   }
   else if (typeID == 'l'){
     console.log(setID,  $(`#lf${riID}`).index())
     if ($(`#ri${riID}`).index()-1 == setID) {point++}
   }

  set_alert_point()
  create_drop()
}
//======================================================
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//=======================================================
function set_alert_point(){

  if (point > 9) level = ((''+point)[0]) * 1

  $('#alert_lvl').text(level)
  $('#alert_point').text(point)

  let lvl_wd  = 600 - (level * 50)
  if (lvl_wd < 30) lvl_wd = 30;

  $('#drop_left').css('width', `${lvl_wd}px`);
  $('#drop_right').css('width', `${lvl_wd}px`);

}
//=======================================================
function timer_go(){

 if (timergo >= 1){
   var t = timergo;
   var s = Math.floor((t) % 60 );
   var m = Math.floor((t/60) % 60 );
   $('#alert_timer').html(`${m} : ${s}`);
   timergo--;
   setTimeout(function(){timer_go()},1000)
 }
 else if(timergo <= 0){
   alert(`Всего очков - ${point}`);
 }
}
//==============================================
function exit_on(src){
  if (confirm("Выйти?")) {
  gohref(src)
} else {
}
}
//==============================================
function gohref(src){
  window.location.href = src
}
//==============================================
timer_go();
create_drop();
