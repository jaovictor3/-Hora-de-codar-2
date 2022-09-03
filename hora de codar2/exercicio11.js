/* Uma micro calculadora
Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem
executadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação).
O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. Observação: Considere
que só serão lidos os valores 1, 2, 3 ou 4 para as operações */


var sinais = prompt("Para usar a calculadora, adicione: (+, -, *, /)");
var n1 = parseFloat(prompt("Informe um número: ")); 
var n2 = parseFloat(prompt("Informe outro número"));

var somar = (n1 + n2);
var subtrair = (n1 - n2);
var multiplicar = (n1 * n2);
var dividir = (n1 / n2);

if(sinais === "+"){
    alert("A Soma de " + n1 + " " + "mais" + " " + n2 + " "+ " é " + somar);
}
else if(sinais === "-"){
    alert("A Subtração de " + n1 + " " + "menos" + " " + n2 + " "+ " é " + subtrair);
}
else if (sinais === "*"){
    alert("A Multiplicação de " + n1 + " " + "multiplicado por " + " " + n2 + " "+ " é " + multiplicar);
}
else if (sinais === "/"){
    alert("A Divisão de " + n1 + " " + "dividido por " + " " + n2 + " "+ " é " + dividir);
}