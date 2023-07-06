$(function(){

    function abrirJanela(){

        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
            //$('.bg').show();
            //$('.bg').hide();
        });
    }

    function verificarCliqueFechar(){
        var el= $('body,.closeBtn');
        el.click(function(){
            $('.bg').fadeOut();
        });

        $('.form').click(function(e){
            e.stopPropagation();
        })
    }

    abrirJanela();
    verificarCliqueFechar()

    

});