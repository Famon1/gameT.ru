<!DOCTYPE html>
<html lang="en">
<head>
  <?php include('head.html')?>
  <title>Обучение. Пакет 1 - Базовый</title>
</head>
<body>
<div id='main_index' class="container-fluid" style='font-size:24px;'>
 <button type="button" class="btn-primary w-100 p-1 mt-3" data-toggle="modal" data-target="#exampleModal" onclick="set_modal(1)">Тренажер 1. Скоростной клик мыши</button><br>
 <button type="button" class="btn-primary w-100 p-1 mt-3" data-toggle="modal" data-target="#exampleModal" onclick="set_modal(2)">Тренажер 2. Перетаскивание элементов</button><br>
 <button type="button" class="btn-primary w-100 p-1 mt-3" data-toggle="modal" data-target="#exampleModal" onclick="set_modal(3)">Тренажер 3. Работа с клавиатурой</button>

 <hr />
<div class="row">
<div class="col-sm-6">
 <div class="card">
  <img src="img/gimp.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text" style='font-size:18px;'>Изучение графического редактора GIMP. Рисование и фотообработка.</p>
    <a href="http://www.progimp.ru/" class="btn btn-primary">Сайт с учебным материалом</a>
    <a href="https://download.gimp.org/mirror/pub/gimp/v2.10/windows/gimp-2.10.18-setup.exe" class="btn btn-primary">Скачать программу</a>
  </div>
  </div>
 </div>

<div class="col-sm-6">
  <div class="card">
   <img src="img/loff.jpg" class="card-img-top">
   <div class="card-body">
     <p class="card-text" style='font-size:18px;'>Бесплатный офисный пакет LibreOffice. Создание и редактирование документов, таблиц, презентаций и баз данных.</p>
     <a href="https://mostik.info/besplatniy_kurs_libreoffice/" class="btn btn-primary">Сайт с учебным материалом</a>
     <a href="http://download.documentfoundation.org/libreoffice/stable/6.4.1/win/x86/LibreOffice_6.4.1_Win_x86.msi" class="btn btn-primary">Скачать программу</a>
   </div>
 </div>
 </div>
</div>
</div>


<!-- Modal -->
<div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="Mlabel">Загрузка</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id='Mtext'>
        Загрузка
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Выбрать другой</button>
        <button type="button" id='btn_go' class="btn btn-success" onclick="">Приступить к выполнению</button>
      </div>
    </div>
  </div>
</div>
</body>
<?php include('scriptlib.html')?>
</html>
