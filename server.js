// load dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// creates connection to sql database
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: '313Lamarr!',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

// array of actions to prompt user