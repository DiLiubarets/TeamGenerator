// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, role, idNumber, email) {
    this.name = name;
    this.email = email;
    this.idNumber = idNumber;
    this.role = "Employee";
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
}

module.exports = Employee;
