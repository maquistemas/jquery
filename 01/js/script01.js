/*$(document).ready(function(){
    
$('ul').addClass('negrita');
$('ul').css('color','green');
    
});*/

/*
    Ambas instrucciones esperan que primero cargue el documento html para poder ejecutar el script. Evita errores de referencia.
*/

$(function(){
    
    $('ul').addClass('negrita');
    $('li:first-child').css('color','green');
    
});