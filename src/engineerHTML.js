
const engineerHTML = ((name, id, email, github)=>{
    return `
    <div class="col-3 m-2 shadow">
    <div class="cardHeader p-2 row bg-danger rounded-top">
        <div class="col-12 h3 text-light">${name}</div>
        <div class="col-12 h6 text-light">Engineer</div>
    </div>

    <div class="cardBody row p-2 bg-light rounded-bottom aling-items-center">
        <div class="cardId m-1 p-1"> ID: ${id}</div>
        <div class="cardEmail m-1 p-1">Email:<a href="mailto:${email}"> ${email}</a></div>
        <div class="cardGithub m-1 p-1">Github: <a href="https://github.com/${github}" target="_blank">${github}</a></div>
    </div>
</div>
`
});

module.exports = engineerHTML;