// CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO
//chiedere l'età dell'utente

let anniUser = parseInt(prompt("How old are you?"));

console.log("How old are you?: I am " + anniUser + " years old" );

let years = "How old are you?: I am " + anniUser + " years old"

document.getElementById("years").innerHTML = years;

//chiedere la distanza da percorrere con il treno
let distance = parseInt(prompt("How many km will you travel?:"));

console.log = ("How many km will you travel?: My journey will be " + distance + " km long");

let journey = "How many km will you travel?: My journey will be " + distance + " km long";

document.getElementById("km").innerHTML = journey

//calcolare il prezzo del biglietto in base ai km da percorrere

//applicare lo sconto in base alla fascia d'età

//prezzo finale del biglietto