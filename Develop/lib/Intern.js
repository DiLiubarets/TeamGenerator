// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, role, idNumber, email, school) {
    super(name, role, idNumber, email);
    this.school = school;
    this.role = "Intern";
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
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
