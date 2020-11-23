
var nome="José Marques";
var idade= 44;
var idade2= 10;

var n1= 44;
var n2= 10;

//var frase = "Japão é o melhor time do mundo";
//console.log(nome);
//console.log(idade+idade2);
//console.log(n1*n2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));

//console.log(frase.toUpperCase()); - transforma a frase em maiúscula
//console.log(frase.toLocaleLowerCase()); - transforma a frase em minúscula


//Array

//var lista= ["maçã", "pêra", "laranja"];

//lista.push("uva"); - adiciona no Array

//lista.pop(); - retira no Array

//console.log(lista[2]); -- traz somente o que está posicionado no Array
// alert(lista[2]); -- também pode usar o alert
//console.log(lista);

//console.log(lista[0]); - imprime apenas o primeiro da lista

//alert( nome + " tenho " + idade + " anos");
//alert(idade+idade2);

//console.log(lista.length); -- retorna a quantidade de elementos

//console.log(lista.reverse()); -- retorna a lista como era
//console.log(lista.toString()); -- reotrna como String
//console.log(lista.toString()[0]); -- imprime somente a primeira letra
//console.log(lista.join (" - ")); -- adiciona um simbolo "-, /, |..."

/*var fruta = {nome:"maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

/*var frutas = [{nome:"maçã", cor: "vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

// condicionamento "if/else"
/*var idade = 18

if (idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

// o uso do prompt abre caixa de texto
/*var idade = prompt ("Qual a sua idade?");

if (idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

// uso do While

var count = 0;

/*while (count <=5){
    console.log(count);
    count=count+1;
};*/

/*var count = 0;

while (count <=5){
    console.log(count);
    count++;
};*/

// contagem com alert

/*var count = 0;

while (count <=5){
    console.log(count);
    alert(count);
    count++;
};*/

// Outra estrutura de repetição "for"

/*var count;

for(count=0; count <=5; count ++){
    alert(count);
};*/

// Data
/*var d = new Date();
alert(d);*/

var d = new Date();
//alert(d.getMonth()+1); - retorna apenas o mês em numeral
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());




