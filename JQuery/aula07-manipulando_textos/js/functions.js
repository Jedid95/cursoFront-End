$(function(){

    var el = $('.box');

    el.html('<div class="teste">Meu elemento!</div>');

    el.html(el.html() + '<h1 class="texto1">Meu texto via javascript!</h1>');

    $('.box2').text("<div></div>");

    console.log(el.text());


});