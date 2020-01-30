const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, internSchool){
    super(name, id, email);
    this.internSchool = internSchool
    }

    getRole() {
        return "Intern";
    }

    getinternSchool() {
        return this.internSchool;
    }
}

module.exports = Intern