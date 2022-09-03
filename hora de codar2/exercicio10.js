/*Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, 
construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:
*/

var altura = parseFloat(prompt("informe sua altura:"));
var sexo = prompt("Informe seu sexo:(Masculino ou Feminino)");
var Masculino =  72.7;
var Feminino = 62.1;

if(sexo === "Masculino"){
    alert("O  IMC é " + Masculino);
}
 if(sexo === "Feminino"){
    alert("o IMC é " + Feminino);
}