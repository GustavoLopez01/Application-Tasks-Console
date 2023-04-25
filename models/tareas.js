const Tarea = require("./tarea");
require('colors');

class Tareas {

    _listado = {};

    get listadoArr(){

        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        console.log(listado);

        return listado;

    }

    establecerTareas( tareas = [] ){

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });


    }

    constructor() {        
        this._listado = {};        
    }

    crearTarea( descripcion = '') {

        const tarea = new Tarea( descripcion );

        this._listado[tarea.id] = tarea;

    }

    listadoCompleto(){

        this.listadoArr.forEach((tarea, indice) => {            
            console.log(`${indice+1}.`.blue + ` ${tarea.descripcion} :: ${(tarea.completado) ? 'Completado'.blue : 'Pendiente'.red}`);
        });        
    }

    listarCompletadasPendientes( completada = true ){

        if(completada){

            this.listadoArr.filter( li => li.completado != null).forEach((tarea, indice) => {            
                console.log(`${indice+1}.`.blue + ` ${tarea.descripcion} :: ${tarea.completado+ ''.blue}`);
            });        

        }else{

            this.listadoArr.filter( li => li.completado == null).forEach((tarea, indice) => {            
                console.log(`${indice+1}.`.blue + ` ${tarea.descripcion} :: ${tarea.completado + ''.red}`);
            });        
            

        }


    }


}

module.exports = Tareas;