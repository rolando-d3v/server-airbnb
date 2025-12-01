









CREATE TABLE User (
    id SERIAL PRIMARY KEY,  
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),            
);

