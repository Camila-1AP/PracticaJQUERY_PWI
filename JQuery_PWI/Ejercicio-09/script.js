/**Crea un enlace en tu página y usa JQuery para que al hacer clic, el enlace no redirija al usuario y,
 *en su lugar, muestre un mensaje en la consola. */

$(document).ready(function(){
      $("#miEnlace").click(function(event){
        event.preventDefault();
        console.log("Se hizo clic en el enlace, pero no se redirigió.");
      });
    })