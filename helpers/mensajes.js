const { resolve } = require('path');

require('colors');

const mostrarMenu = async () => {
    return new Promise((resolve, reject) =>{
        
    console.clear();
    console.log('============================='.blue);
    console.log('Seleccione una opcion');
    console.log('=============================\n'.blue);

    console.log(`${'1.'.blue} Crear tarea`);
    console.log(`${'2.'.blue} Listar tareas`);
    console.log(`${'3.'.blue} Listar tareas completadas`);
    console.log(`${'4.'.blue} Listar tareas pendientes`);
    console.log(`${'5.'.blue} Completar tarea(s)`);
    console.log(`${'6.'.blue} Borrar tarea`);
    console.log(`${'0.'.blue} Salir`);

    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    readLine.question('Seleccione una opción: ', (opc) => {
        resolve(opc);
        readLine.close();
        });
    })
}


const pausaMenu = () => {
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        readLine.question(`Pulsa ${'ENTER'.blue} para countinuar`, (opc) => {
            resolve(opc);
            readLine.close();
        });
    })
}

module.exports = {
    mostrarMenu,
    pausaMenu
}