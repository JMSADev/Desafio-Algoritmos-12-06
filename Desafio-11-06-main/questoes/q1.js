function mostrarResposta(){

    let numero = Number(
        document.getElementById("numero").value
    );

    if(numero % 3 === 0 && numero % 7 === 0){

        document.getElementById("resultado").innerHTML =
        `${numero} é divisível por 3 e por 7`;

    }
    else{

        document.getElementById("resultado").innerHTML =
        `${numero} não é divisível por 3 e por 7`;

    }

}