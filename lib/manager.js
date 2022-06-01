const Employee = require('./Employee');

class Manager extends Employee{

    constructor(name, id, email, officeNumber){
        const ManagersName = name;
        const ManagersId = id;
        const ManagersEmail = email;

        super(ManagersName, ManagersId, ManagersEmail);

        this.officeNumber = officeNumber;
    }

    
    // getRole()—overridden to return 'Manager'
    getRole(){
        const role = 'Manager';
        console.log(`This is an ${role}`)
        return role;
    }
}

// const manager = new Manager();


module.exports = Manager;
// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'