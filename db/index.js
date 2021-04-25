const connection = require('./connection');

class dataBase {
    constructor(connection){
        this.connection = connection;
    }

    // Show departments 
    departments() {
        return this.connection.promise().query(
            'SELECT departments.id, departments.department_name AS department FROM departments ORDER BY id;'
        );
    }

    // Show roles
    roles() {
        return this.connection.promise().query(
            'SELECT roles.id, roles.title, departments.department_name AS department FROM roles LEFT JOIN departments ON roles.department_id = departments.id;'
        );
    }

    // Show employees
    showEmployee() {
        return this.connection.promise().query(
            'SELECT employee.first_name AS name, roles.title, departments.department_name AS department, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id ORDER BY salary;'
        )
    }

    // Show Managers
    showManagers() {
        return this.connection.promise().query(
            'SELECT id, first_name, last_name  FROM employee WHERE id IN (1,4, 6, 8);'
        )
    }


    // additional functionality Section

    // add depertment
    addDepartment(departments) {
        return this.connection.promise().query(
            'INSERT INTO departments SET ?;', departments
        )
    }

    // add new role
    addRole(roles) {
        return this.connection.promise().query(
            'INSERT INTO roles SET ?', roles
        )
    }


}   


module.exports = new dataBase(connection);