$(function(){

    $('a').click(function(){
        $('.teste').css('display','block');
        return false;
    });

    $('body').on('click','a',function(){
        alert('Olá Mundo!');
    })

    $('body').html('<a href="">Meu Link!</a>');

});