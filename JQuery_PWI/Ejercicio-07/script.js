/**Diseña un formulario con un campo de texto y usa JQuery para validar que
 * no esté vacío antes de enviarlo, mostrando un mensaje de error si está vacío.

 */

$(document).ready(function(){
      $("form").submit(function(event){
        $("#mensajeError").text("");

        if($("input").val().trim() === ""){
          event.preventDefault(); 
          $("#mensajeError").text("El campo no puede estar vacío.");
        }
      });
    });