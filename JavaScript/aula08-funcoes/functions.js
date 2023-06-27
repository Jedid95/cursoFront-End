window.onload = function () {

    function realizarconta(num1,num2){
        console.log("Minha função");
        console.log(num1);
        console.log(num2);
        console.log(num1+num2);

    }

    realizarconta(10,20);

    var variavel = function(){
        console.log("Minha função atraves da variavel");
    }

    variavel();

    var obj = {'nome':'Jedid','idade':28,'func':function(){
        console.log("Função dentro do objeto");
    }};

    obj.func();


}