const Employee = require('./Employee');

class Manager extends Employee{

    constructor(name, id, email, officeNumber){
        const ManagersName = name;
        const ManagersId = id;
        const ManagersEmail = email;

        super(ManagersName, ManagersId, ManagersEmail);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    // getRole()—overridden to return 'Manager'
    getRole(){
        const role = 'Manager';
        return role;
    }
}



module.exports = Manager;
