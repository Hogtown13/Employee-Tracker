import Employee from'./config/employee.js'
import Department from'./config/department.js'
import Role from './config/role.js'

import mySql from 'mysql2'
import prompt from 'inquirer'
import cTable from 'console.table'


function view() {
    prompt([{
        type: 'list',
        name: 'view',
        message: 'What would you like to view?',
        choices: [
            'All Departments',
            'All Roles',
            'All Employees'
        ]
    }]).then((answers) => {
        console.log(answers)
    })
    // prompt([{
    //     type: 'list',
    //     name: 'add',
    //     message: 'Would you like to add one of the following?',
    //     choices: [
    //         'Department',
    //         'Role',
    //         'Employee'
    //     ]
    // }])
}

view();



// console.log(table);