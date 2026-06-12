function mostrarResposta(){

    let largura = 5;
    let altura = 3;

    let area = largura * altura;
    let tinta = area / 2;

    document.getElementById("resultado").innerHTML = `
        <p>Largura: ${largura}m</p>
        <p>Altura: ${altura}m</p>
        <br>
        <p>Área: ${area}m²</p>
        <strong>Tinta necessária: ${tinta} litros</strong>
    `;
}