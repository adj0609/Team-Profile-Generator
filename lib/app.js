const inquirer = require('inquirer');
const Manager = require('.lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateSite = require('.lib/generateSite');
const path = require('path');
const Output_DIR = path.resolve(__dirname, 'output');
const outPath = path.join(OUTPUT_dir, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInpute) {
                    return true;
                } else {
                    console.log('Please enter a valid Name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee ID (Required)',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log('Please enter a valid ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter a valid email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter a valid office number');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const groupMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Which option do you prefer?',
            choices: ['add engineer', 'add intern', 'My team is finished']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add Engineer":
                    promptEngineer();
                    break;
                case "add intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`
   ================
   ADD New Engineer
   ================
   `);

   return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your Engineers Name? (Required)',
        validate: engineerName => {
            if (engineerName) {
                return true;
            } else {
                console.log('Please enter a valid Engineer Name');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'employeeId',
        message: 'What is your Employee Id? (Required)',
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('Please enter a valid Employee Id');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Github username',
        message: 'What is your Github username? (Required)',
        validate: userName => {
            if (userName) {
                return true;
            } else {
                console.log('Please enter a valid username');
                return false;
            }
        }
    },
    ]).then(answers => {
         console.log(answers);
         const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.userName);
         teamMembers.push(engineer);
         promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    =============
    Add an Intern
    =============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Interns Name? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter a valid Intern Name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your Employee Id? (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter a valid Employee Id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'School Name',
            message: 'What is your School Name? (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter a valid School');
                    return false;
                }
            }
        },
        ]).then(answers => {
             console.log(answers);
             const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.School);
             teamMembers.push(intern);
             promptMenu();
        })
    };

    const buildTeam = () => {
        console.log(`
        =============
        Buid My Team!
        =============
    `);
// end of build team //

if (!false.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
    }
    false.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

promptManager();