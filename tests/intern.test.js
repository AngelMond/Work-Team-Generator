const Intern = require('../lib/intern');

describe('Initialize test', ()=>{

    describe("Verify the access of the properties from a new Intern object", ()=>{
        it("It should get the name property from the new Intern object",()=>{
            //Arrange
            const name = 'John';
            const id = 8;
            const email = 'test@test.com'
            
            //Act
             const employee = new Intern(name, id, email);

             //Assert
             expect(employee.name).toEqual(name);
        });

        it("It should get the id property from the new Intern object",()=>{
            //Arrange
            const name = 'John';
            const id = 1;
            const email = 'test@test.com'

            //Act
             const employee = new Intern(name, id, email);

            //Assert
             expect(employee.id).toEqual(id);
        });

        
        it("It should get the email property from the new Intern object",()=>{
            //Arrange
            const name = 'John';
            const id = 1;
            const email = 'test@test.com'

            //Act
             const employee = new Intern(name, id, email);

             //Assert
             expect(employee.email).toEqual(email);
        });

        it("It should get the school's name property from the new Intern object",()=>{
            //Arrange
            const name = 'John';
            const id = 1;
            const email = 'test@test.com'
            const school = 'ITESM'
            //Act
             const employee = new Intern(name, id, email, school).getSchool();

             //Assert
             expect(employee).toEqual(school);
        });
    });

    describe("Testing Methods", ()=>{

        it("It should get the name when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'John';
            const id = 1;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Intern(name, id, email).getName();

            //Assert
            expect(newEmployee).toEqual(name);
        });

        it("It should get the id when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'John';
            const id = 1;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Intern(name, id, email).getId();

            //Assert
            expect(newEmployee).toEqual(id);
        });

        it("It should get the email when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'John';
            const id = 1;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Intern(name, id, email).getEmail();

            //Assert
            expect(newEmployee).toEqual(email);
        });
    });
});