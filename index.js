const Employee = require('./config/employee')
const Department = require('./config/department')
const Role = require('./config/role')

const mySql = require('mysql2')
const prompt = require('inquirer')
const cTable = require('console.table')



function view(){
    prompt([{
        type: 'list',
        name: ''
    }])
}
prompt([

])




console.log(table);