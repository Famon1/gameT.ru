<!DOCTYPE html>
<html lang="en">
<head>
  <?php include('head.html')?>
  <title>Обучение. Пакет 1 - Базовый</title>
</head>
<body>
<div id='main_index' class="container-fluid" style='font-size:38px;'>
 <button type="button" class="btn-primary w-100 p-2 mt-5" data-toggle="modal" data-target="#exampleModal" onclick="set_modal(1)">Тренажер 1. Скоростной клик мыши</button><br>
 <button type="button" class="btn-primary w-100 p-2 mt-5" data-toggle="modal" data-target="#exampleModal" onclick="set_modal(2)">Тренажер 2. Перетаскивание элементов</button><br>
 <button type="button" class="btn-primary w-100 p-2 mt-5" data-toggle="modal" data-target="#exampleModal" onclick="set_modal(3)">Тренажер 3. Работа с клавиатурой</button>
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
