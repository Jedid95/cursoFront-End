$(function(){

    $('a').click(function(e){
        e.preventDefault();
    })

    $(window).scroll(function(){
        //evento de quando o scroll ocorre
    });

    $(window).resize(function(){
        //evento de quando a tela é redimensionada
        setTimeout(function(){
            location.href = "http://localhost/cursoFront-End/JQuery/aula04/";
        },1000);
        
    })
});