/** Crea un contenedor <div> con texto dentro. Usa JQuery para que al hacer clic derecho (contextmenu),
 *el texto cambie a "Evento de clic derecho detectado". */

$(document).ready(function(){
      $("#miDiv").on("contextmenu", function(event){
        event.preventDefault(); 
        $(this).text("Evento de clic derecho detectado");
      });
    });