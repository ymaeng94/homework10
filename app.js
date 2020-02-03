const inquirer = require("inquirer");
// const fs = require("fs");

// const employee = require("lib/employee.js");
// const engineer = require("lib/engineer.js");
// const intern = require("lib/intern.js");
// const manager = require("lib/manager.js");


// function promptUser() {
//     return 
inquirer.prompt ([
        {
            type: "input",
            message: "enter your first name",
            name: "name"
        },
        {
            type: "input",
            message: "enter your email address",
            name: "email"
        },
        {
            type: "input",
            message: "what is your role within the company?",
            name: "role",
            choice: ['engineer', 'intern', 'manager']
        },
        {
            type: "input",
            message: "eneter your github username?",
            name: "username",
        },
    ]);
// }