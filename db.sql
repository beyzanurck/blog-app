--
-- PostgreSQL database dump
--

-- Open your terminal

-- Run psql
psql

-- Create DB
CREATE DATABASE blogapp;

-- View all databases
\l

-- Quit current db
\q

-- Connect to the project db
psql blogapp;

-- Create table
CREATE TABLE posts (
    id SERIAL PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    content TEXT NOT NULL, 
    created_at DATE DEFAULT CURRENT_DATE, 
    updated_at DATE DEFAULT CURRENT_DATE,
    img_url VARCHAR(255)
);

-- Index to speed up searches on the 'title' column
CREATE INDEX idx_posts_title ON posts (title);

-- View all tables
\dt

-- View all  attributes
\d posts

-- Insert rows into table
INSERT INTO posts (title, content, created_at, updated_at, img_url)
VALUES (
    'Lorem Ipsum Post 1',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    CURRENT_DATE,
    CURRENT_DATE,
    'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg'
);

INSERT INTO posts (title, content, created_at, updated_at, img_url)
VALUES (
    'Lorem Ipsum Post 2',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    CURRENT_DATE,
    CURRENT_DATE,
    'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg'
);

INSERT INTO posts (title, content, created_at, updated_at, img_url)
VALUES (
    'Lorem Ipsum Post 3',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    CURRENT_DATE,
    CURRENT_DATE,
    'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg'
);

-- View the list
SELECT * FROM posts;

-- To list all indexes
\di

-- Or
SELECT * FROM pg_indexes WHERE tablename = 'posts';


--
-- PostgreSQL database dump complete
--


