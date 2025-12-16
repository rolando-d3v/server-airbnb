CREATE TABLE User (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
);




CREATE TABLE renta (
    id_renta SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    precio NUMERIC(10, 2) DEFAULT 0.00,
    img VARCHAR(255),
    estado boolean DEFAULT true,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);