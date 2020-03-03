<!DOCTYPE html>
<html lang="en">
<head>
  <?include('head.html')?>
  <title>Обучение. Мышь</title>
</head>
<body>
<div class="alert alert-info" id='alert_inf'>
    Сложность:<strong id='alert_lvl'>1</strong> Ваши очки: <strong id='alert_point'>0</strong>
      <span style='float:right'>
        <span class="badge badge-info p-2" id='alert_timer'></span>
        <span class="badge badge-danger p-2" onclick="exit_on('index.php')">Выход</span>
      </span>
  </div>
<div id='main'></div>
</body>
<?include('scriptlib.html')?>
<script type="text/javascript" src="js/script_click.js"></script>
</html>
