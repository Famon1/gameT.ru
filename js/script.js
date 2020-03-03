function gohref(src){
  window.location.href = src
}
//=========================================
function set_modal(ind){
  let naz = $('#Mlabel')
  let txt = $('#Mtext')
  let butt = $('#btn_go')

  if (ind == 1){
    naz.html('Тренажер по работе с мышью')
    txt.html(`Ваша задача «кликать» (левая кнопка мыши) на цветные шары.<br>
              <center><img src= 'img/click.png' height='350'/><br></center>
              С каждым набранным очком увеличивается скорость шаров.
              На выполнение задания дается 5 минут.
              `)
    butt.attr(`onclick`,`gohref('clicker.php')`)
  }
  else if (ind == 2){
    naz.html('Тренажер по перетаскиванию элементов.')
    txt.html(`Вам даны две колонки. Нужно перетащить синий блок под зеленый.
              Чтобы перетащить блок нужно нажать ЛКМ (левой кнопкой мыши)
              и не отпуская, перетащить в нужное место.<br>
              <center><img src= 'img/drop.gif' width='450'/><br></center>
              С каждым набранным очком уменьшается длина блоков.
              На выполнение задания дается 5 минут.
              `)
    butt.attr(`onclick`,`gohref('drop.php')`)
  }
  else if (ind == 3){
    naz.html('Клавиатурный тренажер')
    txt.html(`На экране вы видите клавишу, которую нужно нажать,
              пока она не исчезла. С увеличением очков будет повышаться сложность.<br>
              <center><img src= 'img/klava.png' height='350'/><br></center>
              <strong>ВНИМАНИЕ: У вас должна быть русская раскладка!</strong><br>
              На выполнение задания дается 5 минут.
              `)
    butt.attr(`onclick`,`gohref('klava.php')`)
  }
}
