const Engineer = require('../lib/engineer');

describe('Initialize test', ()=>{

    describe("Verify the access of the properties from a new Engineer object", ()=>{
        it("It should get the name property from the new Engineer object",()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'
            const github = 'user'
            //Act
             const employee = new Engineer(name, id, email, github);

             //Assert
             expect(employee.name).toEqual(name);
        });

        it("It should get the id property from the new Engineer object",()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'

            //Act
             const employee = new Engineer(name, id, email);

            //Assert
             expect(employee.id).toEqual(id);
        });

        
        it("It should get the email property from the new Engineer object",()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'

            //Act
             const employee = new Engineer(name, id, email);

             //Assert
             expect(employee.email).toEqual(email);
        });

        it("It should get the github property from the new Engineer object",()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'
            const github = 'user'
            //Act
             const employee = new Engineer(name, id, email, github).getGithub();

             //Assert
             expect(employee).toEqual(github);
        });
    });

    describe("Testing Methods", ()=>{

        it("It should get the name when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Engineer(name, id, email).getName();

            //Assert
            expect(newEmployee).toEqual(name);
        });

        it("It should get the id when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Engineer(name, id, email).getId();

            //Assert
            expect(newEmployee).toEqual(id);
        });

        it("It should get the email when reciving multiple arguments", ()=>{
            //Arrange
            const name = 'Jess';
            const id = 7;
            const email = 'test@test.com'

            //Act
            const newEmployee = new Engineer(name, id, email).getEmail();

            //Assert
            expect(newEmployee).toEqual(email);
        });
    });
});