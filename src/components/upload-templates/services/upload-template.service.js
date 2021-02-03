const Employee = require('../models/employees.model');

module.exports = {
  saveEmployees: async(row) => {
    const employee = {
      name: row[0],
      position: row[1],
      age: row[2],
      email: row[3],
      company: row[4]
    }
    const newEmployee = new Employee(employee);
    try {
      await newEmployee.save();
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }
}
