const generateTeam = (team) => {
    console.log(team, '2');

    const html = [];

    const generateManager = (manager) => {
        console.log(manager);
        let managerHtml = `
        <div class='card' style='width: 18rem;'>
            <div class="card-header">
            ${manager.name} <br/>
            <i class="fas fa-aug-hot"></i>Manager</div>
            <ul class="List-group list-group-flush">
            <li class="List-group-item">ID: ${manager.id}</li>
            <li class="List-group-item">Email: <span id="email"><a href="mailto:$(manager.email)"</a></span></li>
            <li class="List-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;           
        html.push(managerHtml);
    }
    const generateEngineer = (engineer) => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card" style"width: 18rem;>
            <div class="card-header">
            ${engineer.name} </br>
            <i class=" fas fa-glasses"></i>Engineer</div>
            <ul class="List-group list-group-flush">
            <li class="List-group-item">ID: ${engineer.id}</li>
            <li class="List-group-item">Email: <span id"email"><a href="mailto:${engineer.email}"</a></span></li>
            <li class="List-group-item">Github Username: <a target="_blank" href="https"https://github.com${engineer.githubusername}"</a></li>
            </ul>
        </div>
        `;
        html.push(engineerHtml);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <div class="card" style"width: 18rem;>
            <div class="card-header">
            ${intern.name} </br>
            <i class=" fas fa-user-graduate"></i>Intern</div>
            <ul class="list-group list-group-flush:>
            <li class="List-group-item">ID: &{intern.id}</li>
            <li class="List-group-item">Email: <span id="email"><a href="mailto:${intern.email}</a></span></li>
            <li class="List-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
        html.push(internHtml);
    }


    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    return html.join('');
}

module.exports = generateTeam
// module.exports = team => {
// 
    // `return`
// }

