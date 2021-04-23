
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


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
    ('John', 'Doe', 1, NULL), 
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriquez', 3, 2),
    ('Kevin', 'Tupik', 4, 1),
    ('Malia', 'Brown', 5, 4),
    ('Sarah', 'Lourd', 6, 1),
    ('Tom', 'Anderson', 7, 6),
    ('Tony', 'Stark', 8, 1),
    ('Pepper', 'Potts', 9, 8);