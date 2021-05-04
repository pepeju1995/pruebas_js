/*// Podemos simplificar un if
var status = 0;
if (status === 0) {
    // Hago A
} else if (status === 1) {
    // Hago B
} else if (status === 2){
    // Hago C
}*/

var month = "Febrero";

// Podemos escribirlo como:
switch (month) {
    case "Enero":
        console.log("El mes de Enero tiene 31 dias.")
        break;

    case "Febrero":
        console.log("El mes de Febrero tiene 28/29 dias.")
        break;

    case "Marzo":
        console.log("El mes de Marzo tiene 31 dias.")
        break;

    case "Abril":
        console.log("El mes de Abril tiene 30 dias.")
        break;

    case "Mayo":
        console.log("El mes de Mayo tiene 31 dias.")
        break;

    case "Junio":
        console.log("El mes de Junio tiene 30 dias.")
        break;

    case "Julio":
        console.log("El mes de Julio tiene 31 dias.")
        break;

    case "Agosto":
        console.log("El mes de Agosto tiene 31 dias.")
        break;

    case "Septiembre":
        console.log("El mes de Septiembre tiene 30 dias.")
        break;

    case "Octubre":
        console.log("El mes de Octubree tiene 31 dias.")
        break;

    case "Noviembre":
        console.log("El mes de Noviembre tiene 30 dias.")
        break;

    case "Diciembre":
        console.log("El mes de Diciembre tiene 31 dias.")
        break;
}

// Es mas legible y mas eficiente