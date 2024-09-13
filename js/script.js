$(document).ready(function () {
  $("#addButton").click(function () {
    // Obtener valor del input
    var task = $("#task").val();

    // Verificar si el input no está vacío
    if (task.trim() !== "") {

      // Añadir tarea a lista
      $("ul").append("<li class='list-group-item bg-light'>" + task + "<span id='check' class='badge float-end'><i class='bi bi-check text-success fs-6'></i></span><span id='close' class='badge float-end fs-6'><i class='bi bi-x text-danger'></i></span>" + "</li>");

      // Limpiar el campo de texto
      $("#task").val("");
    } else {
      console.log("No se pude añadir una tarea vacía.");
    }
  });

  // Ocultar icono check y tachar tarea
  $(document).on("click", "#check i", function () {
    $(this).closest('li').addClass('text-decoration-line-through text-danger');
    $(this).remove(); 
  });

  // Borrar tarea
  $(document).on("click", "#close i", function () {
    $(this).closest('li').remove();
  });

});
