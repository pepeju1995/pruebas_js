const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Que edad tienes?: ", function(answer) {
    console.log("Tu edad es " + answer);
    
    rl.close();    
});


