DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT,
    department_name VARCHAR(30) UNIQUE NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE roles (
    
)