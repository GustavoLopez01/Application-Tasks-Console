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

    borrarTarea( id = '' ){
        if(id){
            delete this._listado[id];
        }
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

    toggleCompletadas( ids = [] ){

        ids.forEach( tareaId => {

            const tarea = this._listado[tareaId];

            if(tarea){
                tarea.completado = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {

            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completado = null;
            }

        });

    }


}

module.exports = Tareas;