/*Crea un botón que, al hacer clic, oculte una imagen en la página usando el método
.hide(). */

$(document).ready(function(){
    $('button').click(function(){
        $('img').hide()
    });

});