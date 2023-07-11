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

    $('form#form1').submit(function(e){
        //e.preventDefault();
        var nome = $('input[name=nome]').val();
        var email = $('input[name=email]').val();
        var telefone = $('input[name=telefone]').val();
        
        if(verificarNome(nome) == false){
            aplicarCampoInvalido($('input[name=nome]'));
            return false;
        } else if(verificarTelefone(telefone) == false){
            aplicarCampoInvalido($('input[name=telefone]'));
            return false;
        } else if(verificarEmail(email) == false){
            aplicarCampoInvalido($('input[name=email]'));
            return false;
        } else{
            alert('Formulário enviado com sucesso');
        }
        //Se chegou até o final é pq está tudo ok
    })

    //verifica nome
    function verificarNome(nome){
        if(nome == ''){
            return false;
        }

        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');
        if(amount >= 2){
            //console.log('Temos pelo menos um sobrenome')
            for(var i = 0; i < amount; i++){
                console.log(splitStr[i]);
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    console.log('Nossa condição de nome bateu');
                }else{
                    return false;
                }
            }
        } else{
            return false; 
        }
    }

    //verificar telefone
    function verificarTelefone(telefone){
        if(telefone == ''){
            return false;
        }

        if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null){
            return false;
        }
    }

    function verificarEmail(email){
        if(email == ''){
            return false;
        }

        if(email.match(/^([a-z0-9.-_]{1,})+@+([a-z.]{1,}$)/) == null){
            return false;
        }

    }

    function aplicarCampoInvalido(el){
        el.css('color', 'red');
        el.css('border', '2px solid red');
        el.data('invalido','true');
       // el.val('Campo Inválido');
    }

    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this));
    })

    function resetarCampoInvalido(el){
        el.css('color', 'black');
        el.css('border', '2px solid black');
    }


    abrirJanela();
    verificarCliqueFechar();

    

});