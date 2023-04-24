const { inquirerMenu, pausa, leerTeclado } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require('colors')

const main = async () => {
    
    let opc = -1;
    const tareas = new Tareas();

    do {

        opc = await inquirerMenu();

        switch (opc) {
            case 1:
                // crear nueva tarea
                const descripcion = await leerTeclado('Descripción:')
                tareas.crearTarea(descripcion);
                
                console.log(descripcion);
                

                break;
            case 2:
            // listar todas las tareas
            console.log(tareas.listadoArr);

                break;

            case 3:

                break;

            case 4:
                break;
        
            case 5:
                break;

            case 6: 
                break;

            case 7:
                break;
                
            default:
                break;
        }

        await pausa();

    } while (opc !== 0);

}

main();