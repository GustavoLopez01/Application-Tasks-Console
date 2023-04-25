const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'What do you want to do?',
        choices: [
            {
                value: 1,
                name: `${'1.-'.blue} Crear Tarea`
            },
            {
                value: 2,
                name: `${'2.-'.blue} Listar Tareas`
            },
            {
                value: 3,
                name: `${'3.-'.blue} Listar Tareas Completadas`
            },
            {
                value: 4,
                name: `${'4.-'.blue} Listar Tareas Pendientes`
            },
            {
                value: 5,
                name: `${'5.-'.blue} Completar Tarea(s)`
            },
            {
                value: 6,
                name: `${'6.-'.blue} Borrar Tarea`
            },
            {
                value: 0,
                name: `${'7.-'.blue} Salir..`
            }
        ],
      },
];


const inquirerMenu = async () => {

    console.clear();
    console.log('============================='.blue);
    console.log('Seleccione una opcion');
    console.log('=============================\n'.blue);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}


const pausa = async () => {

    const pausaQuestion = [
        {
          type: 'input',
          name: 'enter',
          message: `Presione ${'enter'.blue} porfavor`
        },
    ];    

    return await inquirer.prompt(pausaQuestion);

}

const leerTeclado =  async ( message ) => {

    const preguntaDescripcion = [
        {
            type: 'input',
            name: 'descripcion',
            message,
            validate( value ) {
                if( value.length === 0){
                    return 'Porfavor ingrese un valor valído'
                }
                return true;
            }
        }
    ]

    const {descripcion} = await inquirer.prompt(preguntaDescripcion); 
    return descripcion;

}

const tareasMenu = async (tareas = []) =>{

    const opciones = tareas.map((tarea, indice) => {
        return {
            value: tarea.id,
            name: ` ${ indice+1}.- `.blue + ` ${tarea.descripcion}`
        }

    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices: opciones
        }];

        const { id } = await inquirer.prompt(preguntas);
        return id;
}

const confirmacionTeclado =  async ( message ) => {

    const pregunta = [
        {
            type: 'confirm',
            name: 'flag',
            message,
        }
    ]

    const {flag} = await inquirer.prompt(pregunta); 
    return flag;

}


module.exports = {
    inquirerMenu,
    pausa,
    leerTeclado,
    tareasMenu,
    confirmacionTeclado,
}