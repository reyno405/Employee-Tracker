// load dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const { default: Choices } = require('inquirer/lib/objects/choices');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// creates connection to sql database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'maggiemay233',
    database: 'employees_db'
})

// connects to sql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    options();
})

// prompts user with list of options to choose from
function options() {
    inquirer
        .createPromptModule({
            name: 'action',
            type: 'list',
            message: 'Welcome to the employee databse! What would you like to do?',
            choices: [
                'View all employees',
                'View all departments',
                'View all roles',
                'Add an employee',
                'Add a department',
                'Add a role',
                'Update employee role',
                'Delete an employee',
                'EXIT'
            ]
        })
}