// El scope es el contexto donde una variable es visible
// existen 2 scopes principales: global y local

// Scope global: Toda variable que esta fuera de una funcion
var variableGlobal = 1;

function global() {
    console.log(variableGlobal);
}

global();
console.log(variableGlobal);

// Scope local: solo visible dentro de una funcion
var variableLocal = 4;

function local() {
    var variableLocal = 2;
    console.log(variableLocal);
}

local();
console.log(variableLocal);

// En JavaScript moderno (>2015) existe let
// let define scope de bloque
// un bloque es todo lo que se encuentra entre { y }

if (condicion) {
    // Esto es un bloque
    let variable = 0;
}

while (condicion) {
    // Esto es otro bloque
}

for (let i = 0; i < 10; ++i) {
    // Esto es otro bloque
}

// Se recomienda usar siempre let
