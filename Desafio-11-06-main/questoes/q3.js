function mostrarResposta(){

    let distancia = 500;
    let consumo = 10;
    let preco = 6.50;

    let litros = distancia / consumo;
    let valor = litros * preco;

    document.getElementById("resultado").innerHTML = `
        <p>Distância: ${distancia} km</p>
        <p>Consumo: ${consumo} km/l</p>
        <p>Preço do combustível: R$ ${preco}</p>
        <br>
        <p>Combustível necessário: ${litros} litros</p>
        <strong>Valor total: R$ ${valor.toFixed(2)}</strong>
    `;
}