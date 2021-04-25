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
                    'Add new department',
                    'View all roles',
                    'Add new role',
                    'View all employees',
                    'Add new employee',
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
                case 'Add new department':
                    newDepartment();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'Add new role':
                    newRole();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add new employee':
                    newEmployee();
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

    // function add department
    function newDepartment() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'department_name',
                message: 'enter new department name'
            }
        ])
        .then(dept => {
            db.addDepartment(dept)
            .then(() => console.log('Added new department!'))
            .then(() => teamPrompt())
        })
    }


    // function view roles
    function viewRoles() {
        db.roles()
        .then(([rows]) => {
            console.table(rows);
        })
        .then(() => teamPrompt());
    }

    // function add role
    function newRole() {
        db.departments()
        .then(([rows]) => {
            const addDept = rows.map(({ id, department_name }) => ({
               name: department_name,
               value: id

            }));

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'enter role name'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter salary for this role'
                },
                {
                    type: 'list',
                    name: 'department_id',
                    message: 'Choose department for this role',
                    choices: addDept
                }
            ])
            .then(role => {
                db.addRole(role)
                .then(() => console.log('Added new role to database!'))
                .then(() => teamPrompt())
            })

        })
    
    }

    // function view employees
    function viewEmployees() {
        db.showEmployee()
        .then(([rows]) => {
            console.table(rows);
        })
        .then(() => teamPrompt());
    }


    // function add employee
    function newEmployee() {
       
        inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter employee first name'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter employee last name'
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Choose role for employee',
                validate: role_id => {
                    if (role_id) {
                        return true;
                    } else {
                        console.log('Provide an role id number');
                        return false;
                    }
                }
            }
        ])
        .then(employ => {
            let firstName = employ.first_name;
            let lastName = employ.last_name;
            let roleId = employ.role_id;

            db.showEmployee()
            .then(([rows]) => {
                rows = {
                    first_name: firstName,
                    last_name: lastName,
                    role_id: roleId
                }
                db.addEmployee(rows)
            })
            .then(() => console.log('Added new employee'))
            .then(() => teamPrompt())
        })
        
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



