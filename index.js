//Importing libraries
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');

//Importing my classes to create an object for each employee the user will add
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');


//Empty arrays will recived the objects the user will create through the interface
const managerArray = [];
const engineersArray = [];
const internsArray = [];

//FUNCTION WHERE USER WILL CHOOSE TO ADD MORE TEAM MEMBERS
function addTeamMembers(){
  inquirer
  .prompt([
    {
      type:'rawlist',
      name:'ListOptions',
      message: 'What would you like to do? You can add more team members or finish your team',
      choices: ['Add an Engineer' , 'Add an Intern', 'Finish',]
  }
  ]).then((userChoice)=>{
    switch(userChoice.ListOptions){
      case 'Add an Engineer':
        engineer();
      break;

    case 'Add an Intern':
        intern();
      break;

    case 'Finish':
        finishedTeam();
      break;
    }
  }).catch(err=>{
    if(err){
      console.log(`Something went wrong when choosing to add team members`);
    }
  })
}
  
//THIS FUNCTION RUNS WHEN USER INITIALIZE THE PROGRAM, AND ASKS ABOUT MANAGERS INFO
function manager(){

  console.log('Welcome!')
  inquirer
    .prompt([
  
      {
          type: 'input',
          name: 'managersName',
          message: `Please enter the Manager's name`,
      },
      {
          type: 'input',
          name: 'managersId',
          message: `Enter the Managers's ID` ,
      },
      {
          type: 'input',
          name: 'managersEmail',
          message: `Please enter the Manager's email address`,
      },
      {
          type: 'input',
          name: 'officeNumber',
          message: `Please enter the Manager's office number`,
      }
      
    ])
    .then((userAnswer) => {
      switch(userAnswer.officeNumber){
          case userAnswer.officeNumber:
            addTeamMembers()
          break;
      }

      //Deconstructuring user answers
      const {managersName, managersId, managersEmail, officeNumber } = userAnswer;

      //Creating my object using my imported Manager class
       const manager = new Manager(managersName, managersId, managersEmail, officeNumber )

       //Pushing object into the empty array
       managerArray.push(manager)

    })
    .catch((err) => {
      if (err) {
        
        console.log('Ups! Sorry, something went wrong when adding a Manager ');
      } //else {
        
     // }
    });
}
  
//FUNCTION TO ADD AN ENGINEER
function engineer(){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineersName',
        message: `Please enter the Engineer's name`,
      },
      {
        type: 'input',
        name: 'engineersId',
        message: `Please enter the engineer's Id`,
      },
      {
        type: 'input',
        name: 'engineersEmail',
        message: `Enter the engineer's email address`,
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: `Please enter the engineer's github username`,
      },

    ]).then((input)=>{
      switch(input.githubUsername){

        case input.githubUsername:
          addTeamMembers();
        break;
      }

      //Deconstructuring user answers
      const {engineersName, engineersId, engineersEmail, githubUsername } = input;

      //Creating my object using my imported Engineer class
      const engineers = new Engineer(engineersName, engineersId, engineersEmail, githubUsername);

      //Pushing object into the empty array
      engineersArray.push(engineers)
    }).catch((err)=>{
      if(err){
        console.log('Ups! Sorry, something went wrong when adding an Engineer');
      }
    })
  }


//FUNCTION TO ADD AN INTERN
function intern(){
    inquirer
    .prompt([
      {
          type: 'input',
          name: 'internsName',
          message: `Please enter the intern's name`,
      },
      {
        type: 'input',
        name: 'internsId',
        message: `Please enter the intern's Id`,
      },
      {
        type: 'input',
        name: 'internsEmail',
        message: `Enter the intern's email address`,
      },
      {
        type: 'input',
        name: 'school',
        message: `Please enter the intern's school name`,
      }
    ]).then((input)=>{
        switch(input.school){
          case input.school:
            addTeamMembers();
            break;
        }
        //Deconstructuring user answers
        const {internsName, internsId, internsEmail, school } = input;

         //Creating my object using my imported Intern class
        let interns = new Intern(internsName, internsId, internsEmail, school);
        
        //Pushing object into the empty array
        internsArray.push(interns)
    }).catch((err)=>{
      if(err){
        console.log('Ups! Sorry, something went wrong when adding an Intern ');
      }
    })
  }
  
 function finishedTeam(){

  // console.log(managerArray)
  // console.log(engineersArray)
  // console.log(internsArray)


  for(let i of engineersArray){
    const name = i.name;
    const id = i.id;
    const email = i.email;
    const github = i.githubUsername;
   

    const engineerHTML = `
    `
  }
//   const writeHTML =`

//    `;
//   fs.writeFile('index.html', writeHTML, (err)=>err? console.log(err): console.log('HTML Successfully created'))
   
 }


  //INITIALIZE PROGRAM
  manager();
 
 

  