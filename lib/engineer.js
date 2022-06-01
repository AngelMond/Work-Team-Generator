const Employee = require('./Employee');

class Engineer extends Employee{

    constructor(name, id, email, githubUsername){
        const EngineersName = name;
        const EngineersId = id;
        const EngineersEmail = email;

        super(EngineersName, EngineersId, EngineersEmail);

        this.githubUsername = githubUsername;
    }

    getGithub(){

    }
    // getRole()—overridden to return 'Engineer'
    getRole(){
        const role = 'Engineer';
        console.log(`This is an ${role}`)
        return role;
    }
}

// const engineer = new Engineer();



module.exports = Engineer;
// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'