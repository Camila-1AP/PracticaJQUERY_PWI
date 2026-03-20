/*Crea un formulario con un campo de entrada y un botón de envío.
Usa JQuery para mostrar una alerta con el valor
ingresado cuando se haga clic en el botón. */

$(document).ready(function(){
    $('button').click(function(){
       let valor = $('input').val()
        alert('Correo: '+ valor)

    });

});