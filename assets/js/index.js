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
  .then((answers) => {
    // Use user feedback for... whatever!!
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
      /* Pass your questions in here */
  
      {
          type: 'input',
          name: 'ManagersName',
          message: 'Please enter the Managers name',
      }
    ])

  }