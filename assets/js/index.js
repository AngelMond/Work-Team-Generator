const fs = require('fs');
const inquirer = require('inquirer');


console.log('Welcome!')
inquirer
  .prompt([
    /* Pass your questions in here */

    {
        type: 'input',
        name: 'ManagersName',
        message: 'Please enter the Managers name',
    },
    {
        type: 'input',
        name: 'EmployeeId',
        message: 'Enter the employee ID',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the Manager email address',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'For the last, please enter the office number',
        
    },
    {
        type:'rawlist',
        name:'ListOptions',
        message: 'What would you like to do? You can add more team members or finish your team',
        choices: ['Add an Engineer' , 'Add an Intern', 'Finish',],
    }
    
  ])
  .then((userAnswer) => {
    switch(userAnswer.ListOptions){
        case 'Add an Engineer':
            engineer();
        break;

        case 'Add an Intern':
            intern();
            break;
        case 'Finish':

        //ANADIR FUNCION PARA TERMINAR
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  
  function engineer(){
    inquirer
    .prompt([
  
      {
          type: 'input',
          name: 'engineerName',
          message: `Please enter the Engineer's name`,
      },
      {
        type: 'input',
        name: 'engineerId',
        message: `Please enter the engineer's name`,
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: `Enter the engineer's email address`,
      },
      {
        type: 'input',
        name: 'gitHubUsername',
        message: `Please enter the engineer's github username`,
      }
    ])

  }


  function intern(){
    inquirer
    .prompt([
  
      {
          type: 'input',
          name: 'internName',
          message: `Please enter the intern's ID`,
      },
      {
        type: 'input',
        name: 'internId',
        message: `Please enter the intern's name`,
      },
      {
        type: 'input',
        name: 'internEmail',
        message: `Enter the intern's email address`,
      },
      {
        type: 'input',
        name: 'school',
        message: `Please enter the intern's school name`,
      }
    ])

  }

  
 