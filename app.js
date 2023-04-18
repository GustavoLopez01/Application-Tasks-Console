const { inquirerMenu, pausa } = require('./helpers/inquirer');

require('colors')

const main = async () => {
    
    let opc = -1;

    do {

        opc = await inquirerMenu();
        console.log(opc);

        await pausa();

    } while (opc !== 0);

}

main();