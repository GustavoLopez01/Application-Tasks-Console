const { guardarArchivoDB, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerTeclado, tareasMenu, confirmacionTeclado, listadoCheck } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require('colors')

const main = async () => {
    
    let opc = -1;
    const tareas = new Tareas();
    const tareasDb = leerDb();

    if(tareasDb){
        tareas.establecerTareas(tareasDb);
    }

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
                tareas.listadoCompleto();

                break;

            case 3:
            // listar tareas completadas
                 tareas.listarCompletadasPendientes(true);

                break;

            case 4:
            // listar tareas pendientes
                 tareas.listarCompletadasPendientes(false);

                break;
        
            case 5:

                const ids = await listadoCheck(tareas.listadoArr);                
                tareas.toggleCompletadas(ids);
                break;

            case 6: 

                const id = await tareasMenu(tareas.listadoArr);
                const flag = await confirmacionTeclado("Estas seguro?")
                
                if(flag){
                    tareas.borrarTarea(id);
                }

                break;

            case 7:
                break;
                
            default:
                break;
        }

        guardarArchivoDB(tareas.listadoArr);

        await pausa();

    } while (opc !== 0);

}

main();