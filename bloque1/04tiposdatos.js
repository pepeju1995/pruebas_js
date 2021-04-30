//Que son los tipos

// Los tipos de javascript:
var numero = 2.5;
var string = 'Soy un texto';
var booleano = false;

var array = ["aa", "bb", 3, [1, 2]];
var objeto = {
    nombre: 'Jose Juan',
    apellido: 'Perez Gonzalez',
    edad: 26
}

var funcion = function() {}

// null y undefined
// null: NO tengo valor definido
// undefined: Variable no inicializada (no definida)
// null y undefined son equivalentes, pero no son el mismo tipo
var valorNulo = null;
var valorUndefined;
console.log(valorNulo == valorUndefined)

// los tipos son dinamicos
var a = 4;
a = 'Hello';

// typeof
console.log(typeof booleano)