// Podemos simplificar un if
var status = 0;
if (status === 0) {
    // Hago A
} else if (status === 1) {
    // Hago B
} else if (status === 2){
    // Hago C
}

// Podemos escribirlo como:
switch (status) {
    case 0:
        // Hago A
        break;
    case 1:
        // Hago C
        break;
    case 2:
        // Hago C
        break;
    default:

        break;
}