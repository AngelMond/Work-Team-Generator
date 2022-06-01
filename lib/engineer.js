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
        return this.githubUsername;
    }
    // getRole()—overridden to return 'Engineer'
    getRole(){
        const role = 'Engineer';
        return role;
    }
}


module.exports = Engineer;
