DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log; 


CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INTEGER DEFAULT 0,
    protein INTEGER DEFAULT 0,
    added_sugar INTEGER DEFAULT 0,
    is_healthy BOOLEAN, 
    image varchar(255)
);


