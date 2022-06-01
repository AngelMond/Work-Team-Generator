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
        return this.school;
    }
    
    
    // getRole()—overridden to return 'Engineer'
    getRole(){
        const role = 'Intern';
        return role;
    }
}


module.exports = Intern;

