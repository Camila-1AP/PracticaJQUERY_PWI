/**Agrega una imagen en tu página y usa JQuery para que, al hacer doble clic en ella, su tamaño se reduzca a la mitad.
 */

$(document).ready(function(){
    $('img').dblclick(function(){
        let nuevoAncho = $(this).width() / 2
        $(this).width(nuevoAncho)

    });

});