/*Escreva um programa que calcule a média de quatro números informados pelo usuário, 
mas somente se esses números forem maiores que 0 e menores que 10. 
o final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". 
Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"
*/

var n1 = parseInt(prompt("Informe valor 1:"));
var n2 = parseInt(prompt("Informe valor 2"));
var n3 = parseInt(prompt("Informe valor 3:"));
var n4 = parseInt(prompt("Informe valor 4:"));
var média = 5;

if(n1,n2,n3,n4 >0 && n1,n2,n3,n4 < 10){
    
    média = (n1 + n2 + n4 )/4;

if(média >= 5){
    alert("Você passou no teste!");
}
else{
    alert("Você não passou no teste!");
}
}