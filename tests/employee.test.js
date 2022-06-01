
const Employee = require('../lib/employee');

describe('Initialize test', ()=>{

    describe("Verify to the access of the properties from a new created object", ()=>{
        it("Getting the name property from the new created object",()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'

            //Act
             const employee = new Employee(name, id, email);

             expect(employee.name).toEqual(name);
        });

        it("Getting the id property from the new created object",()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'

            //Act
             const employee = new Employee(name, id, email);

            //Assert
             expect(employee.id).toEqual(id);
        });

        
        it("Getting the id property from the new created object",()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'

            //Act
             const employee = new Employee(name, id, email);

             //Assert
             expect(employee.id).toEqual(id);
        });
    });

    describe("Testing Methods", ()=>{

        it("It should get the name when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Employee(name, id, email).getName();

            //Assert
            expect(newEmployee).toEqual(name);
        });

        it("It should get the id when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Employee(name, id, email).getId();

            //Assert
            expect(newEmployee).toEqual(id);
        });

        it("It should get the email when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Employee(name, id, email).getEmail();

            //Assert
            expect(newEmployee).toEqual(email);
        });
    });
});