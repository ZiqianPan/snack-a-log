DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log; 

\c snack_a_log; 

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INTEGER DEFAULT 0,
    protein INTEGER DEFAULT 0,
    added_sugar INTEGER DEFAULT 0,
    is_healthy BOOLEAN DEFAULT false, 
    image varchar(255) DEFAULT 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
);



