function mostrarResposta(){
    let produto = document.getElementById("produto").value;

    let valorCompra = Number(
        document.getElementById("valorCompra").value
    );

    let valorVenda;

    if(valorCompra < 10){

        valorVenda = valorCompra * 1.70;

    }
    else if(valorCompra <= 30){

        valorVenda = valorCompra * 1.50;
    }
    else if(valorCompra <= 50){    

        valorVenda = valorCompra * 1.40;
    }
    else{

        valorVenda = valorCompra *1.30;

    }    

    document.getElementById("resultado").innerHTML = `
    <h3>Resultado</h3>

    <p><strong>Produto:</strong> ${produto}</p>

    <p><strong>Valor da Compra:</strong>
    R$ ${valorCompra.toFixed(2)}</p>

    <p><strong>Valor da Venda:</strong>
    R$ ${valorVenda.toFixed(2)}</p>
`;
}