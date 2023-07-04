$(function(){

   /* var input = $('.form_contato input[type=text]');
    var container = $('.container');

    $('.form_contato').submit(function(){

        container.html(input.val());


        return false;
    });*/

    $('.form_contato').submit(function(){
        var container = $('.container');
        var content = 'Nome: '+ $('input[name=nome]').val() +
        '<hr>E-mail: '+ $('input[name=email]').val() +
        '<hr>Telefone: '+ $('input[name=telefone]').val();

        container.html(content);
        return false;
    });

});