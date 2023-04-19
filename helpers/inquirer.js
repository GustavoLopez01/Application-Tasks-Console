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
                name: '1.- Crear Tarea'
            },
            {
                value: 2,
                name: '2.- Listar Tareas'
            },
            {
                value: 3,
                name: '3.- Listar Tareas Completadas'
            },
            {
                value: 4,
                name: '4.- Listar Tareas Pendientes'
            },
            {
                value: 5,
                name: '5.- Completar Tarea(s)'
            },
            {
                value: 6,
                name: '6.- Borrar Tarea'
            },
            {
                value: 0,
                name: '7.- Salir...'
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

module.exports = {
    inquirerMenu,
    pausa,
    leerTeclado,
}