$(function(){

   /* var timer;
    var timeOut = function(){
        $('.box2').animate({
            'width': '40%',
            'hight': '500px',
            'marginLeft': '100px',
            'marginTop': '200px'
        }, 2000);
    }

    $('body').click(function(){
        alert("Animação com timeout foi cancelada!");
        clearTimeout(timer);
    });

    $('.box1').animate({
        'width': '40%',
        'hight': '500px',
        'marginLeft': '100px',
        'marginTop': '200px'
    }, 2000, function(){
       timer = setTimeout(timeOut,3000);

    });*/

    var timer;

    $('body').click(function(){
        alert("Animação com timeout foi cancelada!");
        clearInterval(timer);
    });

    timer = setInterval(function(){
        
    }, 3000);

});