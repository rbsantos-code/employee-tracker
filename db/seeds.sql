
INSERT INTO departments (department_name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');


INSERT INTO roles (title, salary, department_id)
VALUES
    ('Manager', 150000, 1),
    ('Sales Lead', 100000, 1),
    ('Sales', 70000, 1),
    ('Senior Engineer', 250000, 2),
    ('Engineer', 100000, 2),
    ('Chief Finance Analyst', 300000, 3),
    ('Financial Analyst', 120000, 3),
    ('Legal Team Lead', 230000, 4),
    ('Lawyer', 180000, 4);


INSERT INTO employees (first_name, last_name, role_id)
VALUES  
    ('John', 'Doe', 2),
    ('Mike', 'Chan', 3),
    ('Ashley', 'Rodriquez', 4),
    ('Kevin', 'Tupik', 5),
    ('Malia', 'Brown', 6),
    ('Sarah', 'Lourd', 7),
    ('Tom', 'Anderson', 8),
    ('Tony', 'Stark', 9);