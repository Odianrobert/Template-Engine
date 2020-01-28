const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//install jest npm i jest to run tests
const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];

function appMenu() {
//run create manager 1st
    function createManager () {
        console.log("Lets build your team");
        inquirer.prompt ([
            {
                type: "input",
                name: "managerName",
                message: "What is the name of your manager?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your manager's ID number?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email address?"
            },
            {
                type: "input",
                name: "managerPhoneNumber",
                message: "What is your manager's phone number?"
            } 
        ]).then(answers => {
            // Make new class 'Manager' with info provided by user answer
            const manager = new Manager(answers.managerName, answers.managerId, answer.managerEmail, managerPhoneNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        }); 
    }
    //give user choices of what type of team member to add next, choices go in an array
    function createTeam() {
        inquirer.prompt ([
            {
                type: "input",
                name: "employeeType",
                message: "What type of employee would you like to add next?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I do not choose to add any more team members"
                ]
            }
        ]).then(userChoice => {
            switch(userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();   
            }
        })
    }
    function addEngineer(){
        inquirer.prompt ([
            {
                type: "input",
                name: "engineerName",
                message: "What is the name of your engineer?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's ID number?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineers GitHub username?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is you engineer's email address?"
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerGithub, answers.engineerEmail);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        })
    }
    function addIntern (){
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the name of your intern"
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's ID number?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school is your intern enrolled at?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email address?"
            }
        ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internSchool, answers.internEmail);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
    });
}

    function buildTeam() {
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
      }

    createManager();

}

appMenu();
    
    
