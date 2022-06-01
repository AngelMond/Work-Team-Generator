const Employee = require('./Employee');

class Intern extends Employee{

    constructor(name, id, email, school){
        const InternsName = name;
        const InternsId = id;
        const InternsEmail = email;

        super(InternsName, InternsId, InternsEmail);

        this.school = school;
    }

    getSchool(){

    }
    
    
    // getRole()—overridden to return 'Engineer'
    getRole(){
        const role = 'Intern';
        
        console.log(`This is an ${role}`)
        return role;
    }
}

// const intern = new Intern();


module.exports = Intern;

// getRole()—overridden to return 'Intern'

// In addition to Employee's properties and methods, Intern will also have the following:

// school

// getSchool()

// getRole()—overridden to return 'Intern'