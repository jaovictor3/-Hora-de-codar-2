var n1 = parseInt(prompt("Valor 1"));
var n2  = parseInt(prompt("Valor 2"));
var n3  = parseInt(prompt("Valor 3"));


if (n1 > n2 && n1 > n3){
    alert("O número maior é " + n1);
}

if(n1 < n2 && n2 >n3){
    alert("O número maior é " +n2);
}

if(n3 > n1 && n3 > n2 ){
    alert("O número maior é " +n3);
}
