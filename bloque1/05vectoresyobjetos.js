var array = ["aa", "bb", 3, [1, 2], {nombre: 'Jose', apellido: 'Juan'}];
var objeto = {
    nombre: 'Jose Juan',
    apellido: 'Perez Gonzalez',
    edad: 26,
    coches: ['Ferrari', 'Lamborghini'],
    direccion: {
        calle: 'Virgen del rosario',
        numero: 10
    }
}

// acceso array
var item0 = array[0];
var item1 = array[1];

var indice = 4;
var item4 = array[indice].nombre;

// acceso objetos
var nombreObjeto = objeto.nombre;
var calleObjeto = objeto.direccion.calle;
var cochesObjeto = objeto.coches[0];

var item50 = array[50];
console.log(item50);