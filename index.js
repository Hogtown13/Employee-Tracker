import Employee from './config/employee.js'
import Department from './config/department.js'
import Role from './config/role.js'
import connect from './config/connect.js'
import mySql from 'mysql2'
import prompt from 'inquirer'
import table from 'console.table'


connect.connect((err) => {
    console.log(err)
    view();
})


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
            const { choices } = answers;
            switch (answers) {
                case choices === 'view all Departments':
                    viewAllDepartments();
                    break;

                case choices === 'view all Roles':
                    viewAllRoles();
                    break;

                case choices === 'view all Employees':
                    viewAllEmployees();
                    break;

                case choices === 'Add a Department':
                    addDepartment();
                    break;

                case choices === 'Add a Role':
                    addRole();
                    break;

                case choices === 'Add an Employee':
                    addEmployee();
                    break;
        } 
    });

    //view();

};


const viewAllDepartments = () => {
    console.table(Department.id.name)
};

    
