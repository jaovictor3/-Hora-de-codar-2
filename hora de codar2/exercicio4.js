var n1 = parseInt(prompt("Valor 1"));
var n2  = parseInt(prompt("Valor 2"));
var n3  = parseInt(prompt("Valor 3"));
var valor;

if(n1 >= n3 && n2 >= n3){
    valor = n1 + n2;
    alert("A soma de "+ n1 + n2 + " é " + valor);
}
else if(n3 >= n1 && n2 >= n1){
    valor = n3 + n2;
    alert("A soma de "+ n3 + n2 + " é " + valor);
}
else if(n1 >= n2 && n3 >= n2){
    valor = n1 + n3
    alert("A soma de " + n1 +" "+  n3 + " é " + valor);
}

