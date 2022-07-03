class Employee {
    constructor(id, firstName, lastName, roleId, managerId){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.roleId=roleId;
        this.managerId=managerId;
    }
    getId(){
        return this.id;
    }
    getFirst(){
        return this.firstName;
    }
    getLast(){
        return this.lastName;
    }
    getRole(){
        return this.roleId;
    }
    getManager(){
        return this.managerId;
    }
}

module.exports = Employee;