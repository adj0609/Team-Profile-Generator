const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, userName) {
        //calling parent //
        super(name, id, email);

    this.UserName = userName;
}
getuserName() {
    return this.UserName;
}

getRole() {
    return "Engineer";
    }
}

module.exports = Engineer;