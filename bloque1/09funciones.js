/*// Formas de agrupar lógica
function proceso1() {
    console.log("Hago una cosa");
    console.log("Luego hago otra");
}

// Las podemos llamar
proceso1();
// Repetidamente
proceso1();
*/
/*
// Les podemos enviar datos

function generateFullName(nombre, apellido) {
    console.log(nombre + " " + apellido);
}

generateFullName("Jose Juan", "Perez Gonzalez");
*/
/*
// Podemos hacer que nos devuelvan datos
function calculateMidPoint(num1, num2) {
    return (num1 + num2)/2;
}

var firstNumber = 2;
var secondNumber = 4;
var midPoint = calculateMidPoint(firstNumber, secondNumber);
console.log("La media de " + firstNumber + " y " + secondNumber + " es: " + midPoint);
*/
/*
// Las funciones son de tipo de dato, por lo que podemos utilizarlo como variable

var logicaSaludar = function(nombre) {console.log("Hola mi nombre es " + nombre)};
var logicaSaludarMaleducado = function(nombre) {console.log("Hola, no me gustas pero mi nombre es " + nombre)};

// En logicaSaludar teenemos la referencia a la funcion
// Podeemos hacer algo tan loco como pasar una funcion a otra
function saludarSuperEducadamente(funcionPasadaPorParametro, nombre) {
    console.log("Disculpee, perdone que le moleste, pero ");
    // Ejecutamos la funcion que hemos recibido
    funcionPasadaPorParametro(nombre);
    console.log("Espero pasar una muy buena velada con usted.");
}

// Lo ejecutamos todo
saludarSuperEducadamente(logicaSaludarMaleducado, "Jose Juan");


*/

function multiplicarVectorPorNumero(vectorNumeros, numero){
    var nuevoVector = [];
    for (let num of vectorNumeros) {
        nuevoVector.push(num * numero);
    }
    return nuevoVector;
}

var vector = [25, 50, 30];
var numero = 3;

console.log(multiplicarVectorPorNumero(vector, numero));