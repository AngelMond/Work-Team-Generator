const { is } = require("@babel/types");



class Employee {

    constructor(name, id, email){

        if(typeof name !== 'string' || name == " "){
            throw new Error("Please enter a name");
        }

        if(isNaN(id)){
            throw new Error("The id should be a number and grater than 0");
        }
        this.name = name;
        this.id = id;
        this.email = email;

        console.log('Employee has been added successfully!');
    }

    
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){

        return 'Employee';
    }
}

module.exports = Employee;