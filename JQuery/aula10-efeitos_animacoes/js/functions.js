$(function(){

    /*
    //Para sumir
    $('.box1').fadeOut(2000,function(){
        //para aparecer
        $('.box2').fadeIn(3000, function(){
            console.log("Animação terminada");
        })
    }); */

    $('.box1').click(function(){
        $('.box2').slideToggle();
    });

});