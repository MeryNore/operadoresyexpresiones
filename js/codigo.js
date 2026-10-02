// "use strict";

window.onload = principal;

function principal() {
    document.getElementById("btn-reto1").onclick = btnReto1;
    document.getElementById("btn-reto2").onclick = btnReto2;
    document.getElementById("btn-reto3").onclick = btnReto3;
    document.getElementById("btn-reto4").onclick = btnReto4;
    document.getElementById("btn-reto5").onclick = btnReto5;
    document.getElementById("btn-reto6").onclick = btnReto6;
    document.getElementById("btn-retoExtra").onclick = btnRetoExtra;
}

//Reto 1. Calculadora de operadores 
function btnReto1() {
    let numero1, numero2, puntos;

    numero1 = 17;
    numero2 = 5;

    //Calculad y mostrad en consola: suma, resta, multiplicación, división y resto de la división. Después analizad este código:
    console.log("Suma:", numero1 + numero2);
    console.log("Resta:", numero1 - numero2);
    console.log("Multiplicación:", numero1 * numero2);
    console.log("División:", numero1 / numero2);
    console.log("Resto de la división:", numero1 % numero2);

    puntos = 10;
    console.log("Puntos1:", puntos);
    puntos += 5;
    console.log("Puntos2:", puntos);
    puntos *= 2;
    console.log("Puntos3:", puntos);
    puntos -= 4;
    console.log("Puntos4:", puntos);
}

//Reto 2. El misterio del incremento
function btnReto2() {
    let a = 5;
    let b = 2;
    let resultado1 = a++ + b;
    let c = 5;
    let d = 2;
    let resultado2 = ++c + d;
    console.log("Resultado 1:", resultado1);
    console.log("Resultado 2:", resultado2);
}

//Reto 3. ¿Iguales o no?
function btnReto3() {
    let edad1 = 18;
    let edad2 = "18";

    console.log("edad1 == edad2:", edad1 == edad2);
    console.log("edad1 === edad2:", edad1 === edad2);
    console.log("edad1 != edad2:", edad1 != edad2);
    console.log("edad1 !== edad2:", edad1 !== edad2);
    console.log("edad1 > 15:", edad1 > 15);
    console.log("edad2 === '18':", edad2 === "18");
}

//Reto 4. Control de acceso
function btnReto4() {
    let edad = 19;
    let tieneEntrada = true;
    let estaVetado = false;

    //Una persona puede entrar solamente si tiene 18 años o más, tiene entrada y no está vetada. Construid una única expresión lógica utilizando >=, && y !.
    let puedeEntrar = edad >= 18 && tieneEntrada && !estaVetado;
    console.log("¿Puede entrar?", puedeEntrar);
}

//Reto 5. Detective de tipos
function btnReto5() {
    let dato1 = 25;
    let dato2 = "25";
    let dato3 = true;
    let dato4 = 7.5;
    console.log("Tipo de dato1:", typeof dato1);
    console.log("Tipo de dato2:", typeof dato2);
    console.log("Tipo de dato3:", typeof dato3);
    console.log("Tipo de dato4:", typeof dato4);
}

//Reto 6. Desafío final: precio de una entrada
function btnReto6() {
    let nombre = "Lucía";
    let edad = 17;
    let precioEntrada = 12;
    let descuento = 3;
    let esSocio = false;

    //Calculad el precio final usando obligatoriamente el operador ternario: si es socio, se aplica el descuento; si no lo es, paga el precio completo.
    let precioFinal = esSocio ? precioEntrada - descuento : precioEntrada;
    console.log(nombre, " - Precio de la entrada: ", precioFinal, "€");
}

function btnRetoExtra() {
    let x = 5;
    let y = "5";
    let a = x == y;
    let b = x === y;
    x++;
    let c = x > 5 && b;
    let d = x > 5 || b;
    let resultado = d ? "ACCESO" : "DENEGADO";
    console.log("Resultado:", resultado);
}
