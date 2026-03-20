/*Diseña una lista con tres elementos (<li>). Usa JQuery para que al pasar el mouse sobre un elemento, su fondo cambie de color. */

$(document).ready(function(){
    $('#colorido')
    .hover(
  function() {
    // Se ejecuta al entrar (hover)
    $(this).css("background-color", "blue");
    $(this).css("color", "white");


  },
  function() {
    // Se ejecuta al salir
    $(this).css("background-color", "white");
    $(this).css("color", "black");

  }
);
});
