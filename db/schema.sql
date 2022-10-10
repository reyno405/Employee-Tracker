-- Create table department
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

-- Use employee_db --
USE employee_db;

-- Create table department
CREATE TABLE dapartment (
    -- Create unique id for each item
    id INT NOT NULL AUTO_INCREMENTT,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Create table roles
CREATE TABLE roles (
    title VARCHAR(30) salary DECIMAL department_id INT PRIMARY KEY (id)
);

-- Create table employee
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENTT,
    first_name VARCHAR(30) last_name VARCHAR(30) role_id INT manager_id INT PRIMARY KEY (id)
);