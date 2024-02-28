//let cachipun = prompt("Ingrese Tijera, Papel o Piedra")
// console.log("cachipun");

function play(userChoice) {
    let choices = ['piedra', 'papel', 'tijeras'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (userChoice === computerChoice) {
        result = '¡Empate!';
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