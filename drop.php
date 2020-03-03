<!DOCTYPE html>
<html lang="en">
<head>
  <?include('head.html')?>
  <title>Обучение. Перетаскивание</title>
</head>
<body>
<div class="alert alert-info" id='alert_inf'>
    Сложность: &nbsp <strong id='alert_lvl'>1</strong> &nbsp Ваши очки: <strong id='alert_point'>0</strong>
      <span style='float:right'>
        <span class="badge badge-info p-2" id='alert_timer'></span>
        <span class="badge badge-danger p-2" onclick="exit_on('index.php')">Выход</span>
      </span>
  </div>
<div id='main'>
  <div class="flexed">
    <div>
      <h2>&nbsp Левая сторона</h2>
      <div class="tasks-wrapper" id="drop_left">
      </div>
    </div>
    <div>
      <h2>Правая сторона</h2>
      <div class="tasks-wrapper" id="drop_right">
      </div>
    </div>
  </div>

</div>
</body>
<?include('scriptlib.html')?>

<script type="text/javascript" src="js/script_drop.js"></script>

</html>
