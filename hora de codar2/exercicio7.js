/* Faça um programa que leia 6 números que o usuário vai informar. 
Todos os números lidos com valor inferior a 72 devem ser somados. 
Escreva o valor final da soma efetuada e também todos valores 
que o usuário informou.*/

var n1 = parseInt(prompt("Valor 1 "));
var n2 = parseInt(prompt("Valor 2"));
var n3 = parseInt(prompt("Valor 3"));
var n4 = parseInt(prompt("Valor 4"));
var n5 = parseInt(prompt("Valor 5"));
var n6 = parseInt(prompt("Valor 6"));

var valor = 72;
var somar = n1 + n1 + n2 + n3 + n4 + n5 + n6;
var acumular = 0;

if(n1 < 72 ){
    acumular += n1;
}

 if(n2 < 72){
    acumular += n2;

}
 if (n3 < 72){
    acumular += n3;
}
 if(n4 < 72){
    acumular += n4;
}
 if(n5 < 72){
    acumular += n5;
}
if (n6 < 72){
    acumular += n6;
}

alert(n1 + " " + n2 + " " + n3 + " " + n4 + " " + n5 + " " + n6 + " "+ "A Soma de todos é " + acumular);