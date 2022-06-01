

const managerHTML = require('./managerHTML');
const engineerHTML = require('./engineerHTML');
const internHTML = require('./internHTML');


const HTML = ((managerHTML, engineerHTML, internHTML)=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Work Team Generator</title>
        <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
    </head>
    <body class="bg-body">
    
     
            <header class="row mb-4">
                <h1 class="col text-center bg-success p-4 text-light" > Work Team View</h1>
            </header>
            
            
            <main class="row">
                <section class="col">

                <!--Manager Card-->
                    <article class="row mb-5">
                        <div class="col">
                            <h2 class="text-center">Manager</h2>
    
                            <div class="row justify-content-center" id="addManager">

                                                                    ${managerHTML}
                            </div>
                            
                        </div>
                    </article>
    
                    <!--Engineer Cards-->
                    <article class="row mb-5">
                        <div class="col">
                            <h2 class="text-center">Engineer's</h2>
                            
                            <div class="row justify-content-center" id="addEngineer">
    
                                                                         ${engineerHTML}
    
                            </div>
                            
                        </div>
                    </article>
                    
                    <!--Intern Cards-->
                    <article class="row mb-5">
                        <div class="col">
                            <h2 class="text-center">Intern's</h2>
                            <div class="row justify-content-center" id="addIntern">
    
                                                                    ${internHTML}

                            </div>
    
                        </div>
                    </article>
    
                </section>
            </main>
       
    
       
    
        <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>`
});

module.exports = HTML;