// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, role, idNumber, email, github) {
    super(name, role, idNumber, email);
    this.github = github;
    this.role = "Engineer";
  }

  getId() {
    return this.idNumber;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
