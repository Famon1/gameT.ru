let point = 0;
let level = 0;
let timergo = 300;
let timer_set = 500;
let timer_opac = '';
let opac_set = 1;

let onkey = ''

let alfaV = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
let alfa = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'

addEventListener("keydown", function(e) {

  if (onkey == e.key) point++
   else point--

  create_key()
})
//======================================================
function create_key() {

  opac_set = 1;

  let mainD = $('#main')
  mainD.empty();

  let rand = randInt(0,32)
  onkey = alfa[rand]

  mainD.html(`<div class='container bg-primary' id='div_key'>${alfaV[rand]}</div>`)

  intervalkey()
  set_alert_point()
}
//======================================================
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//=======================================================
function intervalkey(){

  if (opac_set <= 0) create_key()
  else {
    opac_set -= 0.1
    $('#div_key').css('opacity',opac_set)
    clearInterval(timer_opac);
  }
  timer_opac = setTimeout(function(){intervalkey()},timer_set)
}
//=======================================================
function set_alert_point(){

  if (point > 9) level = ((''+point)[0]) * 1
  if (point > 99) level = ((''+point)[0] + (''+point)[1]) * 1
  $('#alert_lvl').text(level)
  $('#alert_point').text(point)

  timer_set = 400 - (level * 20)

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
create_key();
