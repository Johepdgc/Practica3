function velocidad() {
    let distancia = document.getElementById("distancia").value;
    let tiempo = document.getElementById("tiempo").value;

    let distanciaEnMetros = distancia * 1000;
    let tiempoEnSegundos = tiempo * 60;

    let velocidad = distanciaEnMetros / tiempoEnSegundos;
    console.log(velocidad);
    let resultado = document.getElementById("resultado").innerText = "La velocidad es de: " + velocidad.toFixed(1) + " metros sobre segundos";
}

function tipoDeTriangulo() {
    let lado1 = document.getElementById("lado1").value;
    let lado2 = document.getElementById("lado2").value;
    let lado3 = document.getElementById("lado3").value;

    if (lado1 == lado2 && lado2 == lado3) {
        console.log("Equilatero");
        let resultado = document.getElementById("tipo").innerText = "El triángulo es equilatero";
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log("Isósceles");
        let resultado = document.getElementById("tipo").innerText = "El triángulo es isósceles";
    } else {
        console.log("Escaleno");
        let resultado = document.getElementById("tipo").innerText = "El triángulo es escaleno";
    }
}

function calculadora() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let operacion = document.getElementById("operacion").value;

    if (operacion == "suma") {
        let resultado = document