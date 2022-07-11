-- Uses the database we created
USE emp_track_db;


INSERT INTO department(department_name)
VALUES("IT Dept"),
("Transportation"),
("Banker"),
("Mechanic");


INSERT INTO role(title, salary, department_id)
VALUES("IT Tech", 50000, 1),
("Driver", 45000, 2),
("Teller", 35000, 3),
("Tech", 45000, 4),
("IT asst", 20000, 1),
("car Washer", 15000, 2),
("Guard", 45000, 3),
("trans guy", 45000, 4);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("john", "doe", 1, NULL),
("john", "doe", 1, 2),
("john", "doe", 2, NULL),
("john", "doe", 2, 2),
("john", "doe", 3, NULL),
("john", "doe", 3, 2),
("john", "doe", 4, NULL),
("john", "doe", 4, 2);


