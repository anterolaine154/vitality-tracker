/*
* Filename: advanced_data_processing.js
* Description: This code demonstrates advanced data processing techniques using JavaScript.
* It includes complex algorithms, data manipulation, and creative problem-solving methods.
*/

// Data to be processed
const data = [
  { id: 1, name: 'John', age: 25, salary: 50000 },
  { id: 2, name: 'Jane', age: 30, salary: 75000 },
  { id: 3, name: 'Bob', age: 23, salary: 40000 },
  { id: 4, name: 'Alice', age: 28, salary: 60000 },
  { id: 5, name: 'Sam', age: 35, salary: 90000 },
];

// Function to filter employees based on criteria
function filterEmployees(criteria) {
  return data.filter(employee => employee.age >= criteria.minAge && employee.salary >= criteria.minSalary);
}

// Function to calculate average salary of employees
function calculateAverageSalary() {
  const totalSalary = data.reduce((sum, employee) => sum + employee.salary, 0);
  return totalSalary / data.length;
}

// Function to find the highest paying employee
function findHighestPayingEmployee() {
  return data.reduce((highestPaid, employee) => {
    return employee.salary > highestPaid.salary ? employee : highestPaid;
  }, data[0]);
}

// Sorting employees based on salary in ascending order
function sortEmployeesBySalaryAsc() {
  return data.sort((a, b) => a.salary - b.salary);
}

// Extracting unique names from the data
function extractUniqueNames() {
  return [...new Set(data.map(employee => employee.name))];
}

// Example usage
console.log(`Employees aged 25 and above, earning at least $50,000:`, filterEmployees({ minAge: 25, minSalary: 50000 }));
console.log(`Average salary of all employees:`, calculateAverageSalary());
console.log(`Highest paying employee:`, findHighestPayingEmployee());
console.log(`Employees sorted by salary in ascending order:`, sortEmployeesBySalaryAsc());
console.log(`Unique names of all employees:`, extractUniqueNames());

// Other complex algorithms, data manipulation, and problem-solving techniques can be implemented below...
// ...
// ...
// ... (continued code)
// ...
// ...
// ...
// ... (continued code)

// End of file