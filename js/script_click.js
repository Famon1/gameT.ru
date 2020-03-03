let max_ww = 210;
let max_hh = 210;
let timer_max = 1000;
let point = 0;
let level = 0;
let timergo = 300;
let timer_ball = '';
//======================================================
let settB = {
  1: {w: 210, h: 210, t:46, f:86},
  2: {w: 170, h: 170, t:41, f:64},
  3: {w: 130, h: 130, t:24, f:56},
  4: {w: 90, h: 90, t:13, f:49},
  5: {w: 50, h: 50, t:2, f:32},
};
//======================================================
function ballch(id) {

  let objB = $(`#${id}`)
  let val = (objB.attr('value') * 1) + 1;

  if (val >= 5) {
                  objB.remove()
                  create_buble()
                }
   else if (val > 0)
   {
      objB.css('width',settB[val].w)
      objB.css('height',settB[val].h)
      objB.css('padding-top',settB[val].t)
      objB.css('font-size',settB[val].f)
      objB.attr('value',val)

      timer_ball = setTimeout(function(){ballch(id)},timer_max)
   }
}
//======================================================
function create_buble(){
  set_alert_point()
  let ww = $(window).width();
  let hh = $(window).height();

  let indef = 'ball' + randInt(1000,9999);
  let clr = getRColor();

  $('<div>',{id:indef,
            class:'pointdiv',
            css:{
              backgroundColor:clr
            },
            value:0,
            on: {
              click: function(event){
                $(this).attr('value',5)
                $(this).remove();
                point++;
                create_buble()
              }
            },
          }).appendTo('#main');

    let left = randInt(1, ww - max_ww)
    let top = randInt(1,hh - max_hh)
    $(`#${indef}`).offset({left:left,top:top});

    setTimeout(function(){ballch(indef)},0)
}
//======================================================
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//======================================================
function getRColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//=======================================================
function set_alert_point(){

  if (point > 9) level = ((''+point)[0]) * 1

  $('#alert_lvl').text(level)
  $('#alert_point').text(point)

  timer_max = 1000 - (level * 100);
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
   clearInterval(timer_ball)
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
create_buble();
timer_go();
