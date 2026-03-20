/**Diseña una tabla con varias filas y usa JQuery para resaltar la fila en la que el mouse está posicionado utilizando hover. */

$(document).ready(function(){
    $('tr').hover(function(){
        $(this).css('background-color', ' #80e1e6')

    },

function(){
    $(this).css('background-color', 'white')
});
});