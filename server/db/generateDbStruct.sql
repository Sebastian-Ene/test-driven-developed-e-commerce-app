--drop db--
DROP DATABASE courses;
--create db--
CREATE DATABASE courses;
--select database--
\c courses
--create tables--
CREATE TABLE users (
    user_id serial PRIMARY KEY,
    email VARCHAR( 255 ) UNIQUE NOT NULL,
    password VARCHAR ( 50 ) NOT NULL,
    username VARCHAR ( 50 ) NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT false,
    created_on TIMESTAMP DEFAULT current_timestamp,
    last_login TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE products (
    product_id serial PRIMARY KEY,
    name VARCHAR( 255 ) UNIQUE NOT NULL,
    description VARCHAR ( 1000 ) NOT NULL,
    price NUMERIC NOT NULL,
    image  VARCHAR(1000) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT false,
    created_on TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE orders (
    order_id serial PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    payment_completed BOOLEAN NOT NULL DEFAULT false,
    completed_date TIMESTAMP DEFAULT current_timestamp,
    FOREIGN KEY (product_id)
      REFERENCES products (product_id),
    FOREIGN KEY (user_id)
      REFERENCES users (user_id)
);