$("#speaker").click(function () {
  location.href = "html/speaker.html";
});

$("#feria").click(function () {
  location.href = "html/feria.html";
});

$('#datepicker').datepicker({
  uiLibrary: 'bootstrap',
   format: 'dd-mm-yyyy' 
});

$("#reportes").click(function () {
  location.href = "html/reportes.html";
});

$("#tipo").click(function () {
  const usuario = $("#tipoUsuario");
  let tipo = $("#tipo").val()
  if (tipo == "1") {
    $('#noParticipante').collapse('hide');
    $('#participante').collapse('show');

  }
  else {
    if(tipo == null){
      $('#noParticipante').collapse('hide');
      $('#participante').collapse('hide');

    }
    else {
      $('#participante').collapse('hide');
      $('#noParticipante').collapse('show');
    }
  }
})