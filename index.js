// Dependencies
const inquirer = require('inquirer');
const db = require('./db');


// Function Section
function init() {

    // function to team prompt
    function teamPrompt() {
        console.log("let's go team!");
        inquirer.prompt([
            {
                // ask choice section
                type: 'list',
                name: 'viewTeam',
                message: 'What do you want to do?',
                choices: [ 
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'View Managers',
                    'Nothing'
                ]

            }
        ])
        // start section depending on choice
        .then(userChoice => {
            switch (userChoice.viewTeam) {
                case 'View all departments':
                    viewDepartment();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'View Managers':
                    viewManagers();
                    break;
                case 'Nothing':
                    quit();
            }
        });
    }

    // function view departments
    function viewDepartment() {
        db.departments()
        .then(([rows]) => {
            console.table(rows);
        })
        .then(() => teamPrompt());
    }

    // function view roles
    function viewRoles() {
        db.roles()
        .then(([rows]) => {
            console.table(rows);
        })
        .then(() => teamPrompt());
    }

    // function view employees
    function viewEmployees() {
        db.showEmployee()
        .then(([rows]) => {
            console.table(rows);
        })
        .then(() => teamPrompt());
    }

    // function view managers
    function viewManagers() {
        db.showManagers()
        .then(([rows]) => {
            console.table(rows);
        })
        .then(() => teamPrompt());
    }


    // function quit
    function quit() {
        process.exit();
    }

    teamPrompt();

}
init();



