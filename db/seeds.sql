-- Create two new databases --
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

-- Use inventory_db --
USE employee_db;

-- Create table department
CREATE TABLE dapartment (
    -- Create unique id for each item
    id INT NOT NULL AUTO_INCREMENTT,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);