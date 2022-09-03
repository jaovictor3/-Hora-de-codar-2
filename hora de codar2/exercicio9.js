/* Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem 
que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).*/

var n1 = parseInt(prompt("Informe o ano que você nasceu."));
var ano = 2006;

if(n1 < ano){ 
    alert("Você poderá votar ");

   
} else if (n1 > ano){
        alert("Você não poderá votar ");
    }
   