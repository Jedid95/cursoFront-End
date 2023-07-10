$(function(){

    /*var frase = 'ola mundo';
    var verifica = frase.match(/ola/);
    console.log(verifica);*/

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

    $('form#form1').submit(function(){
        var nome = $('input[name=nome]').val();
        var email = $('input[name=email]').val();
        var telefone = $('input[name=telefone]').val();
        
        //verifica nome
        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');
        if(amount >= 2){
            //console.log('Temos pelo menos um sobrenome')
            for(var i = 0; i < amount; i++){
                console.log(splitStr[i]);
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    console.log('Nossa condição de nome bateu');
                }else{
                    aplicarCampoInvalido($('input[name=nome]'));
                    return false;
                }
            }
        } else{
            aplicarCampoInvalido($('input[name=nome]'));
            return false; 
        }
        return false;
        //Se chegou até o final é pq está tudo ok
    })



    function aplicarCampoInvalido(el){
        el.css('border', '2px solid red');
        el.data('invalido','true');
        el.val('Campo Inválido');
    }


    abrirJanela();
    verificarCliqueFechar();

    

});