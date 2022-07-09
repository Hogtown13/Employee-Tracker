import Employee from './config/employee.js'
import Department from './config/department.js'
import Role from './config/role.js'

import mySql from 'mysql2'
import prompt from 'inquirer'
import cTable from 'console.table'


function view() {
    prompt.prompt([{
        type: 'list',
        name: 'view',
        message: 'What would you like to do?',
        choices: [
            'view all Departments',
            'view all Roles',
            'view all Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee'
        ]
    }])
        .then((answers) => {

            if (answers.view == 'view all Departments') {
                console.log('Fuck Yeah!!!')
            } else {
                console.log('finally')
            }
        })
        .catch((err) => {
            if (err) {
                console.log('Something went wrong!')
            } else {
                console.log('Something else went wrong!')
            }
        });
}

view();



// console.log(table);