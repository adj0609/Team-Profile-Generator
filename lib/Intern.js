const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        //calling parent //
        super(name, id, email);

    this.School = school;
}
getOfficeNumber() {
    return this.School;
}

getRole() {
    return "Intern";
    }
}

module.exports = Intern;