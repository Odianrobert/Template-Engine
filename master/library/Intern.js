const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, internSchool){
    super(name, id, email);
    this.internSchool = internSchool
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
      }
}

module.exports = Intern