$(function(){
    $('#teste').css('background-color','#ccc');
    $('#teste').css('padding-left', '50px');

    console.log($('#teste').css('padding-left'));
    setTimeout(function(){
        $('#teste').css('background-color','green');
        $('#teste p').css('color','red');
    },2000);
});