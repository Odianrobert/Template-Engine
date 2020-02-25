const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./library/Manager");//make sure path is correct
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
//install jest npm i jest to run tests
 const outputPath = path.resolve(__dirname, "output", "main.html");
 
//need to make folder "output to store rendered html"
const render = require("./library/htmlrender");

const myTeam = [];
const idArray = [];



//run create manager 1st
//validate if then "" can copy and paste to engineer and intern
const createManager = () => {
        console.log("Lets build your team");
        inquirer.prompt ([
            {
                type: "input",
                name: "managerName",
                message: "What is the name of your manager?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                    return "You must enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your manager's ID number?",
                //use regex for value ranges, must search for numbers only, use for engineer and intern
                validate: answer => {
                    const pass = answer.match (
                        /^[1-9]/
                    );
                    if (pass){
                        return true;
                    }
                    return "Please enter a number greater than zero.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email address?",
                // again using regex to look for this input xxx@xxx.xxx, use for enigineer and intern as well, text @ text . text fromat
                validate: answer => {
                    const pass = answer.match(
                      /\S+@\S+\.\S+/
                    );
                    if (pass) {
                      return true;
                    }
                    return "Please enter a valid email address.";
                  }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your manager's office number?",
                validate: answer => {
                  const pass = answer.match(
                    /^[1-9]\d*$/
                  );
                  if (pass) {
                    return true;
                  }
                  return "Please enter a positive number greater than zero.";
                }
              }
        ]).then(answers => {
            // Make new class 'Manager' with info provided by user answer
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            myTeam.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        }); 
    }

    createManager()
    //give user choices of what type of team member to add next, choices go in an array
    function createTeam() {
        inquirer.prompt ([
            {
                type: "list",
                name: "memberChoice",
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
                case "I do not choose to add any more team members":
                    // buildTeam(managerArray, engineerArray, internArray);
                    buildTeam();
            }
        })
    }
    function addEngineer(){
        inquirer.prompt ([
            {
                type: "input",
                name: "engineerName",
                message: "What is the name of your engineer?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                    return "You must enter at least one character.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's ID number?",
                validate: answer => {
                    const pass = answer.match (
                        /^[1-9]/
                    );
                    if (pass){
                        return true;
                    }
                    return "Please enter a number greater than zero.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineers GitHub username?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                    return "You must enter at least one letter or character.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is you engineer's email address?",
                validate: answer => {
                    const pass = answer.match(
                      /\S+@\S+\.\S+/
                    );
                    if (pass) {
                      return true;
                    }
                    return "Please enter a valid email address.";
                  }
            }
        ]).then(answers =>  { 
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub );
            myTeam.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        })
    }
    function addIntern (){
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the name of your intern",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                    return "You must enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's ID number?",
                //test to make sure that the ID has not been used
                validate: answer => {
                    const pass = answer.match (
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArray.includes(answer)) {
                          return "This ID is taken, please use another ID number.";
                        } else {
                          return true;
                        }            
                      }
                      return "Please enter a positive number greater than zero.";
                    }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school is your intern enrolled at?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                    return "You must enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email address?",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                      );
                      if (pass) {
                        return true;
                      }
                      return "Please enter a valid email address.";
                    }
            }
        ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internSchool, answers.internEmail);
        myTeam.push(intern);
        idArray.push(answers.internId);
        // teamMembers.push(intern); => had this same code for all types of employees, had to redo them
        
        createTeam();

    })
    
    }
    
    function buildTeam() {
        fs.writeFileSync(outputPath, render(myTeam), "utf-8");
      }
    // async function teamHtml() {
    //     // console.log("hi")
    //     try {
    //         const answers = await createTeam();
      
    //         const html = generateHTML(answers);
    //       //writeFile will create html page with the answers
    //         await writeFileAsync("main.html", html);
      
    //         console.log("Successfully wrote to main.html");
    //     } catch (err) {
    //         console.log(err);
    //     }
    //    }
    // app.get("/", function(req,res){
    //     res.render("filename", {data})
    // })

    // function buildTeam(manager, engineer,intern) {
    //     fs.writeFileSync("./library/htmlrender.js", {manager, engineer,intern});
    //   }

    // createManager();
    // async function render() {
    //     console.log("hi")
    //     try {
    //         const answers = await appMenu();
      
    //         const html = generateHTML(answers);
    //       //writeFile will creat html page with the answers
    //         await writeFileAsync("main.html", html);
      
    //         console.log("Successfully wrote to main.html");
    //     } catch (err) {
    //         console.log(err);
    //     }
    //    }
    // render()



    
    
