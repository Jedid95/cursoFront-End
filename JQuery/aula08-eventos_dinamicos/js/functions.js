$(function(){
    /*
    $('a').click(function(){
        $('.teste').css('display','block');
        return false;
    });

    $('body').on('click','a',function(){
        alert('Olá Mundo!');
        return false;
    })

    $('body').html('<a href="">Meu Link!</a>');

    */

    var func = function(){
        $(this).css('background','green');
        console.log($(this).index());
    }

    /*$('input[name=nome_pessoa]').keyup(func);*/
    $('input[name=nome_pessoa]').keydown(func);

});