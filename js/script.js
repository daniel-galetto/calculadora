
// function suma() {
//     const numero1 = parseInt(document.getElementById('numero1').value);
//     const numero2 = parseInt(document.getElementById('numero2').value);
//     document.getElementById('resultado').innerHTML = resultado;
//     resultado = numero1 + numero2;
// }

// function resta() {
//     var numero1 = parseInt(document.getElementById('numero1').value);
//     var numero2 = parseInt(document.getElementById('numero2').value);
//     resultado = numero1 - numero2;
//     document.getElementById('resultado').innerHTML = resultado;
// }

// function multiplica() {
//     var numero1 = parseInt(document.getElementById('numero1').value);
//     var numero2 = parseInt(document.getElementById('numero2').value);
//     resultado = numero1 * numero2;
//     document.getElementById('resultado').innerHTML = resultado;
// }

// function divide() {
//     var numero1 = parseInt(document.getElementById('numero1').value);
//     var numero2 = parseInt(document.getElementById('numero2').value);
//     resultado = numero1 / numero2;
//     document.getElementById('resultado').innerHTML = resultado;
// }

function operacion(operador) {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);

    switch (operador) {
        case '+':
        resultado = numero1 + numero2;
        break;
        case '-':
        resultado = numero1 - numero2;
        break;
        case '*':
        resultado = numero1 * numero2;
        break;
        case '/':
        resultado = numero1 / numero2;
        break;
    }

    document.getElementById('resultado').innerHTML = resultado;
}

function suma() {
    operacion('+');
}

function resta() {
    operacion('-');
}

function multiplica() {
    operacion('*');
} 

function divide() {
    operacion('/');
}