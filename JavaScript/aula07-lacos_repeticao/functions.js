window.onload = function () {

    var repeticao = 0;

    // While - precisa de uma variável inicial
    while(repeticao < 10){
        console.log("Olá mundo número: " + repeticao);
        repeticao ++;
    }

    console.log("Chegou no fim");
    //While end

    //for
    for(var numero=0; numero < 10; numero++){
        console.log(numero);
    }
    // for end

    //do - executa primeiro o código
    do{
        console.log("Ola mundo");
        nome = "João";
    }while(nome == "Jedid");

    //do end


}