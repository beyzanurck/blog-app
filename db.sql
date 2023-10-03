--
-- PostgreSQL database dump
--

-- Open your terminal

-- Run psql
psql

-- Create DB
CREATE DATABASE dbname;

-- View all databases
\l

-- Quit current db
\q

-- Connect to the project db
psql dbname;

-- Create table
CREATE TABLE tablename (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(50),
    address TEXT,
    image_path VARCHAR(512)
);

-- View all tables
\dt

-- Insert rows into table
INSERT INTO tablename (first_name, last_name, email, phone_number, address, image_path) 
VALUES 
('', '', '', '', '', ''),

('', '', '', '', '', ''),

('', '', '', '', '', '');

-- View the list
SELECT * FROM tablename;


--
-- PostgreSQL database dump complete
--