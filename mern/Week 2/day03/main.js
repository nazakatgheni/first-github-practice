// Define a nested object representing a company's employees and their departments
let company = {
    name: "TechCorp",
    departments: {
        engineering: {
            manager: "Alice",
            team: ["Bob", "Charlie", "David"]
        },
        marketing: {
            manager: "Eve",
            team: ["Frank", "Grace"]
        },
        finance: {
            manager: "Hank",
            team: ["Ivy", "Jack", "Kelly"]
        }
    }
};
// Write a function to print out the employees and their managers in each department
// for each loop

console.log(company.departments.engineering.team)
