//let cachipun = prompt("Ingrese Tijera, Papel o Piedra")
// console.log("cachipun");

function play(userChoice) {
    let choices = ['piedra', 'papel', 'tijeras'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (userChoice === computerChoice) {
        result = '¡Empate, sigue intentandolo!';
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijeras') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        result = '¡Felicitaciones le ganaste a la computadora!';
    } else {
        result = '¡Que pena, has perdido contra la computadora!';
    }

    document.getElementById('result').innerHTML = 'Elegiste ' + userChoice + '. La computadora eligió ' + computerChoice + '. ' + result;
}
let contador = 0;
let limiteDeOpcionesParaJugar = 10; // Número máximo de opciones para jugar

function incrementarContador() {
    if (contador < limiteDeOpcionesParaJugar) {
        contador++;
        actualizarContador();
    } else {
        alert("¡Se ha alcanzado el límite de opciones para jugar!");
    }
}


//Resetear el contador
function resetearContador() {
    contador = 0;
    actualizarContador();
}


function actualizarContador() {
    let contadorElemento = document.getElementById('contador');
    contadorElemento.textContent = contador;
}
function incrementarContador() {
    if (contador === game) {
       
    } else {
        alert("¡Se ha alcanzado el límite de opciones para jugar!");
    }
}