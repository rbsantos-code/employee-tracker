const connection = require('./connection');

class dataBase {
    constructor(connection){
        this.connection = connection;
    }

    // Show departments 
    departments() {
        return this.connection.promise().query(
            'SELECT departments.id, departments.department_name AS department FROM departments;'
        );
    }
}


module.exports = new dataBase(connection);