require('colors')
const { mostrarMenu, pausaMenu } = require('./helpers/mensajes');

console.clear();

const main = async () => {
    
    let opc = '';

    do {

        opc = await mostrarMenu();
        await pausaMenu();
        
    } while (opc !== '0');

}

main();