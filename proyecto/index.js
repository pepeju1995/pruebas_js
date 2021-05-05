const { rawListeners } = require("process");
const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tarea: valor booleano y descripcion
let taskList = [];

function addTask(taskList, taskDescription) {
    taskList.push({done: false, description: taskDescription});
}

function printTaskList(taskList) {
    for (let i = 0; i < taskList.length; ++i) {
        if (taskList[i].done) {
            // tarea realizada
            console.log((i + 1) + ". [x] " + taskList[i].description);
        } else {
            // tarea no realizada
            console.log((i + 1) + ". [ ] " + taskList[i].description);
        }
    }
}


function mode1(taskList) {
    rl.question("Introduce una nueeva  tarea (fin si terminas)", function(taskDesc) {
        switch (taskDesc) {
            case "fin":
                console.log("Has terminado de añadir tareas.")
                mode2(taskList);
                break;
            case "exit":
                rl.close();
                break;
            default:
                addTask(taskList, taskDesc);
                console.log("La lista de tareas actual es:");
                printTaskList(taskList);
                mode1(taskList);
        }
    });
}


function taskDone(taskList, index) {
    if (index >= 0 && index < taskList.length) {
        taskList[index].done = true;
    } else {
        console.log("Invalid task number.");
    }
}


function taskListDone(taskList) {
    for (task of taskList) {
        if (!task.done) {
            return false;
        }
    }
    return true;
}


function mode2(taskList) {
    printTaskList(taskList);
    rl.question("¿Que tarea has realizado? (1 - " + taskList.length + ")", function(taskNumber) {
        switch (taskNumber) {
            case "fin":
            case "exit":
                console.log("Bye bye");
                rl.close();
                break;
            default:
                taskDone(taskList, taskNumber - 1);
                if (taskListDone(taskList)) {
                    printTaskList(taskList);
                    console.log("Has completado toda la lista. ¡Enhorabuena!")
                    rl.close();
                } else {
                    mode2(taskList);
                }
        }
    });
}

// Primer modo: lectura de tareas necesarias
mode1(taskList);


// Segundo modo: marcar las tareas realizadas