// Dependencies
const { beforeAll } = require('@jest/globals');
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
                    'Nothing'
                ]

            }
        ])
        // start section depending on choice
        .then(userChoice => {
            switch (userChoice.viewTeam) {
                case 'View all departments':
                    // add function
                    break;
                case 'View all roles':
                    //add function
                    break;
                case 'View all employees':
                    // add function
                    break;
                case 'Nothing':
                    // add function
            }
        });
    }


}