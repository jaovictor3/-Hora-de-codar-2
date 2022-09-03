var n1 = parseInt(prompt("Insira um valor "));
var n2 = parseInt(prompt("Insira um valor "));
var n3 = parseInt(prompt("Insira um valor "));
var n4 = parseInt(prompt("Insira um valor "));

if(n1 > n2 && n1 > n3 && n1 > n4){
    alert("O primeiro número é " + n1 + " " + " e o último número é "+ n4 + " " + " e o maior número é o"+ " "+ n1);
}

else if(n2 > n1 && n2 > n3 && n2 > n4){
    alert("O primeiro número é " + n1 + " " + "e o último número é " + n4 + " " + "e o maior número é o " + " " + n2);
}

else if(n3 > n1 && n3 > n2 && n3 > n4){
    alert("O primeiro número é "+ n1 + " " + "e o último número é " + n4 + " " + "e o maior número é o " + " " + n3);
}

else if (n4 > n1 && n4 > n2 && n4 > n3){
    alert("O primeiro número é " + n1 + " " + "e o último número é " + n4 + " " + "e o maior número é o" + " " + n4);
}