//DOM - Document Object Model
function somarValores() {
    var n1 = document.getElementById('number1').value;
    var n2 = document.getElementById('number2').value;

    var result = parseInt(n1) + parseInt(n2);

    var divResultado = document.getElementById('resultado');
    divResultado.append("O resultado da soma é " + result);
    console.log(result);
}