$(function(){
    $('.artigo1').click(function(){
        $('.artigo2').css('background-color','blue');
    });

    $('.artigo1').hover(function(){
        $('.artigo2').css('background-color','red');
    }, function(){
        $('.artigo2').css('background-color','blueviolet');
    });

    $('textarea').focus(function(){
        console.log('Estou dentro do textarea');
    });

    $('textarea').blur(function(){
        console.log('Estou fora do textarea');
    });

    function validarFormulario(){
        $('select').change(function(){
            console.log("Meu select foi alterado");
        });
    }

    validarFormulario();

});