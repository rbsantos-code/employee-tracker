DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT,
    department_name VARCHAR(30) UNIQUE NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    PRIMARY KEY (id),
    CONSTRAINT fk_departments FOREIGN KEY (department_id) REFERENCES departments(id)
);


CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER(10) NOT NULL,
    manager_id INTEGER(10) NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_roles FOREIGN KEY (role_id)
    REFERENCES roles(id)
);