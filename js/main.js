// CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO
//chiedere l'età dell'utente

let anniUser = parseInt(prompt("How old are you?"));

console.log("How old are you?: I am " + anniUser + " years old" );

let years = "How old are you?: I am " + anniUser + " years old";

document.getElementById("years").innerHTML = years;

//chiedere la distanza da percorrere con il treno
let distance = parseInt(prompt("How many km will you travel?:"));

console.log("How many km will you travel?: My journey will be " + distance + " km long");

let journey = "How many km will you travel?: My journey will be " + distance + " km long";

document.getElementById("km").innerHTML = journey;

//calcolare il prezzo del biglietto in base ai km da percorrere

const rate = Number( 0.25 );

var price = parseInt(rate * distance);

console.log("The cost of your ticket is " + price + "€");

var sale20 = price - ( price * .2)

console.log( "scondo del 20%: " + sale20)

var sale40 = price - ( price * .4)

console.log( "scondo del 40%: " + sale40)



//applicare lo sconto in base alla fascia d'età
 
/*if (anniUser < 18) {
    price = price * 0.2;
} if (anniUser > 65) {
    price = price * 0.8;
}*/

//prezzo finale del biglietto
