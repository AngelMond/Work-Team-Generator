const Manager = require('../lib/manager');

describe('Initialize test', ()=>{

    describe("Verify the access of the properties from a new Manager's object", ()=>{
        it("It should get the name property from the new Manager object",()=>{
            //Arrange
            const name = 'Dominic';
            const id = 2;
            const email = 'test@test.com'
            
            //Act
             const employee = new Manager(name, id, email);

             //Assert
             expect(employee.name).toEqual(name);
        });

        it("It should get the id property from the new Manager object",()=>{
            //Arrange
            const name = 'Dominic';
            const id = 2;
            const email = 'test@test.com'

            //Act
             const employee = new Manager(name, id, email);

            //Assert
             expect(employee.id).toEqual(id);
        });

        
        it("It should get the email property from the new Manager object",()=>{
            //Arrange
            const name = 'Dominic';
            const id = 2;
            const email = 'test@test.com'

            //Act
             const employee = new Manager(name, id, email);

             //Assert
             expect(employee.email).toEqual(email);
        });

        it("It should get the office number property from the new Manager object",()=>{
            //Arrange
            const name = 'Dominic';
            const id = 2;
            const email = 'test@test.com'
            const officeNumber = 5;
            //Act
             const employee = new Manager(name, id, email, officeNumber).getOfficeNumber();

             //Assert
             expect(employee).toEqual(officeNumber);
        });
    });

    describe("Testing Methods", ()=>{

        it("It should get the name when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'Dominic';
            const id = 2;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Manager(name, id, email).getName();

            //Assert
            expect(newEmployee).toEqual(name);
        });

        it("It should get the id when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'Dominic';
            const id = 2;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Manager(name, id, email).getId();

            //Assert
            expect(newEmployee).toEqual(id);
        });

        it("It should get the email when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'Dominic';
            const id = 2;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Manager(name, id, email).getEmail();

            //Assert
            expect(newEmployee).toEqual(email);
        });
    });
});