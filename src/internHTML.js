const internHTML = ((name, id, email, school)=>{
    return `  
    <div class="col-3 m-2 shadow">
    <div class="cardHeader p-2 row bg-warning rounded-top">
        <div class="col-12 h3 text-light">${name}</div>
        <div class="col-12 h6 text-light">Intern</div>
    </div>

    <div class="cardBody row p-2 bg-light rounded-bottom aling-items-center">
        <div class="cardId m-1 p-1"> ID: ${id}</div>
        <div class="cardEmail m-1 p-1">Email:<a href="mailto:${email}"> ${email}</a></div>
        <div class="cardSchool m-1 p-1">School: ${school}</div>
    </div>
</div>`
});

module.exports = internHTML;