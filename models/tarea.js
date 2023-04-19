const { v4 : uuuid4 } = require('uuid');

class Tarea {

    id = '';
    descripcion = '';
    completado = null;

    constructor(descripcion){
        
        this.id = uuuid4();
        this.descripcion = descripcion;
        this.completado = null;
    }

    

}

module.exports = Tarea;