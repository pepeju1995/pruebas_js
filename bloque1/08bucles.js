/*// Bucle while
var contador = 0;
var N = 50;
while (contador < N) {
    console.log(contador);
    contador ++;
}
*/
/*
// Bucle do while
do {

} while (condicion);
*/
/*
// Bucle for
for (let i = 0; i < 10; ++i) {
    console.log(i);
}
*/
/*
var array = [10 , 20, 30];
var estudiantes = [
    {
        nombre: "Estudiante 1",
        nota: 5
    },
    {
        nombre: "Estudiante 2",
        nota: 8
    },
    {
        nombre: "Estudiante 3",
        nota: 1
    }
]
// Iterar sobre vectores y objetos
for (let item of estudiantes) {
    console.log(item.nombre, item.nota);
}

var estudianteAuxiliar = {
    nombre: "Estudiante 1",
    nota: 5
}
for (let key in estudianteAuxiliar) {
    console.log(estudianteAuxiliar[key]);
}
*/

// Arbol de navidad
var altura = 7

for (let i = 1; i <= altura; i++) {
    console.log(" ".repeat(altura - i), "*".repeat(i * 2 - 1));
    //console.log("*".repeat(i * 2 - 1));    
}