const inquirer = require('inquirer');


const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: ['opt1', 'opt2']
    }
];

console.log('Hello There!');


const inquirerMenu = async() =>{
    console.log('=============='.green);
    console.log(' Seleccione una opcion' .green);
    console.log('==============\n'.green);

    const option = await inquirer.prompt([questions]);
    return option;
}

inquirerMenu();