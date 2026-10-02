"use strict";

window.onload = principal;

function principal() {
    document.getElementById("btn-reto1").onclick = btnReto1;
    document.getElementById("btn-reto2").onclick = btnReto2;
    document.getElementById("btn-reto3").onclick = btnReto3;
    document.getElementById("btn-reto4").onclick = btnReto4;
    document.getElementById("btn-reto5").onclick = btnReto5;
    document.getElementById("btn-reto6").onclick = btnReto6;
}

//Reto 1. Calculadora de operadores 
function btnReto1() {
    let numero1, numero2, puntos;
    numero1 = 17;
    numero2 = 5;
    puntos = 10;
    puntos += 5;
    puntos *= 2;
    puntos -= 4;

}