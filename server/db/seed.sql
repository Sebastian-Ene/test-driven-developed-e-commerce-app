--- use db ---
\c courses
--- insert users ---
--- admin ---
INSERT INTO users(email, password, username, is_admin) VALUES ('ene.sebastian.2000@gmail.com', '1234', 'Sebi', true);
--- users ---
INSERT INTO users(email, password, username, is_admin) VALUES ('enesebi@yahoo.com', '1234', 'Sebi', false);
INSERT INTO users(email, password, username, is_admin) VALUES ('dfsaf@fdsagmail.com', '1234', 'John', false);
INSERT INTO users(email, password, username, is_admin) VALUES ('sfadfsa@fsdfagmail.com', '1234', 'Sett', false);
INSERT INTO users(email, password, username, is_admin) VALUES ('fsadf@dfsagmail.com', '1234', 'Bob', false);

--- insert products ---

INSERT INTO products(name, description, price, image, is_active) VALUES ('Python', 'This Python For Beginners Course Teaches You The Python Language Fast.', 199.99, 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg', true);
INSERT INTO products(name, description, price, image, is_active) VALUES ('Java', 'This Java For Beginners Course Teaches You The Python Language Fast.', 20, 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg', true);
INSERT INTO products(name, description, price, image, is_active) VALUES ('C', 'This C For Beginners Course Teaches You The Python Language Fast.', 124552, 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg', true);
INSERT INTO products(name, description, price, image, is_active) VALUES ('C++', 'This c++ For Beginners Course Teaches You The Python Language Fast.', 213.5235, 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg', true);
INSERT INTO products(name, description, price, image, is_active) VALUES ('Javascript', 'This Javascript For Beginners Course Teaches You The Python Language Fast.', 99.99, 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg', true);

--- insert orders ---

INSERT INTO orders(user_id, product_id, payment_completed) VALUES (1,1,true);
INSERT INTO orders(user_id, product_id, payment_completed) VALUES (2,1,true);
INSERT INTO orders(user_id, product_id, payment_completed) VALUES (1,2,true);
INSERT INTO orders(user_id, product_id, payment_completed) VALUES (3,1,false);
INSERT INTO orders(user_id, product_id, payment_completed) VALUES (3,4,true);
