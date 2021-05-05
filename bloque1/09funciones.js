/*// Formas de agrupar lógica
function proceso1() {
    console.log("Hago una cosa");
    console.log("Luego hago otra");
}

// Las podemos llamar
proceso1();
// Repetidamente
proceso1();


// Les podemos enviar datos

function generateFullName(nombre, apellido) {
    console.log(nombre + " " + apellido);
}

generateFullName("Jose Juan", "Perez Gonzalez");
*/

// Podemos hacer que nos devuelvan datos
function calculateMidPoint(num1, num2) {
    return (num1 + num2)/2;
}

var firstNumber = 2;
var secondNumber = 4;
var midPoint = calculateMidPoint(firstNumber, secondNumber);
console.log("La media de " + firstNumber + " y " + secondNumber + " es: " + midPoint);