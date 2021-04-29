var booleanoCierto = true;
var booleanoFalso = false;

var a = '10';
var b = 10;

var aMayorQueb = a > b;

// > < >= <= 
// == === != !==

console.log(a === b);

var rangoInicio = 0;
var rangoFinal = 100;
var numeroAComparar = 48;

var mayorQueInicio = numeroAComparar > rangoInicio;
var menorQueFinal = numeroAComparar < rangoFinal;
var dentroDeRango = mayorQueInicio && menorQueFinal;

console.log(dentroDeRango);

// Realizar un programa que dadas dos lineas (dos rangos)
// (a, b) (c, d) comprobar si las lineas se solapan o no

var a = 0;
var b = 15;
var c = 16;
var d = 20;

var resultado = ((a <= c) && (c <= b)) || ((a <= d) && (d <= b)) || ((c <= a) && (a <= d)) || ((c <= b) && (b <= d));

console.log(resultado);