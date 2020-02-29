let max_ww = 210;
let max_hh = 210;

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
   else if (val !== NaN)
   {
      objB.css('width',settB[val].w)
      objB.css('height',settB[val].h)
      objB.css('padding-top',settB[val].t)
      objB.css('font-size',settB[val].f)
      objB.attr('value',val)

      setTimeout(function(){ballch(id)},1000)
   }
}
//======================================================
function create_buble(){

  let ww = $(window).width();
  let hh = $(window).height();

  let indef = 'ball' + randInt(1000,9999);

  $('<div>',{id:indef,
            class:'pointdiv',
            value:0,
            on: {
              click: function(event){
                $(this).attr('value',5)
                $(this).remove();
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
create_buble();
