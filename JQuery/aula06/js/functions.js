$(function(){

    var elWidth = $('.box').width();
    console.log(elWidth);

    $('.box').css('width','900px');

    console.log($('.box').innerWidth());

    console.log($('.box').outerWidth())

});