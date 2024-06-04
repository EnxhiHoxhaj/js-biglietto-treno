// CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO
//chiedere l'età dell'utente

let finale;

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

let price = parseInt(rate * distance);

console.log("The cost of your ticket is " + price + "€");

//applicare lo sconto in base alla fascia d'età

var sale20 = price - ( price * .2);

console.log( "You have a 20% discount, so the cost of your ticket is: " + sale20 + "€");

var sale40 = price - ( price * .4);

console.log( "You have a 40% discount, so the cost of your ticket is: " + sale40 + "€");

//prezzo finale del biglietto

if (anniUser <= 17) {
    finale = "You have a 20% discount, so the cost of your ticket is: " + sale20 + "€";
} else if(anniUser >= 65) {
    finale = "You have a 40% discount, so the cost of your ticket is: " + sale40 + "€";
} else {
    finale = "The cost of your ticket is " + price + "€";
}

document.getElementById("ticket-cost").innerHTML = finale;