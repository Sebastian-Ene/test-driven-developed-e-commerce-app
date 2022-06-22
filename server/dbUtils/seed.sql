--- use db ---
\c courses
--- insert users ---
--- admin ---
INSERT INTO users (email, password, username) VALUES ('ene.sebastian.2000@gmail.com', '1234', 'Sebi');
INSERT INTO admins (email) VALUES ('ene.sebastian.2000@gmail.com');
--- users ---
INSERT INTO users (email, password, username) VALUES ('enesebi@yahoo.com', '1234', 'Sebi');
INSERT INTO users (email, password, username) VALUES ('dfsaf@fdsagmail.com', '1234', 'John');
INSERT INTO users (email, password, username) VALUES ('sfadfsa@fsdfagmail.com', '1234', 'Sett');
INSERT INTO users (email, password, username) VALUES ('fsadf@dfsagmail.com', '1234', 'Bob');

--- insert courses ---

INSERT INTO courses (name, description, short_description, price, image, is_active) VALUES ('Python','Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa quos consequatur quasi, sunt reiciendis
                            unde quia, voluptatibus earum ad, odio aspernatur
                            amet quisquam exercitationem aperiam! Voluptate
                            expedita similique nesciunt temporibus, rem dolore
                            recusandae corporis ex impedit eligendi laboriosam.
                            Ad voluptas, earum eos maiores vero voluptate
                            voluptatem sit consectetur eum cumque quisquam optio
                            exercitationem necessitatibus nemo. Nulla, expedita
                            nisi. Magnam, numquam minima. Perferendis fugiat
                            assumenda atque. Est, natus nulla, sapiente incidunt
                            cumque corporis ipsum debitis hic saepe laboriosam
                            reprehenderit nostrum soluta facilis inventore
                            accusantium quisquam ipsam officia labore. Doloribus
                            vel rerum similique voluptatum, consectetur,
                            repellat iste eos iusto sed ipsum repudiandae!', 'This Python For Beginners Course Teaches You The Python Language Fast.', 199.99, 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg', true);
INSERT INTO courses (name, description, short_description, price, image, is_active) VALUES ('Java','Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa quos consequatur quasi, sunt reiciendis
                            unde quia, voluptatibus earum ad, odio aspernatur
                            amet quisquam exercitationem aperiam! Voluptate
                            expedita similique nesciunt temporibus, rem dolore
                            recusandae corporis ex impedit eligendi laboriosam.
                            Ad voluptas, earum eos maiores vero voluptate
                            voluptatem sit consectetur eum cumque quisquam optio
                            exercitationem necessitatibus nemo. Nulla, expedita
                            nisi. Magnam, numquam minima. Perferendis fugiat
                            assumenda atque. Est, natus nulla, sapiente incidunt
                            cumque corporis ipsum debitis hic saepe laboriosam
                            reprehenderit nostrum soluta facilis inventore
                            accusantium quisquam ipsam officia labore. Doloribus
                            vel rerum similique voluptatum, consectetur,
                            repellat iste eos iusto sed ipsum repudiandae!', 'This Java For Beginners Course Teaches You The Python Language Fast.', 20, 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg', false);
INSERT INTO courses (name, description, short_description, price, image, is_active) VALUES ('C','Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa quos consequatur quasi, sunt reiciendis
                            unde quia, voluptatibus earum ad, odio aspernatur
                            amet quisquam exercitationem aperiam! Voluptate
                            expedita similique nesciunt temporibus, rem dolore
                            recusandae corporis ex impedit eligendi laboriosam.
                            Ad voluptas, earum eos maiores vero voluptate
                            voluptatem sit consectetur eum cumque quisquam optio
                            exercitationem necessitatibus nemo. Nulla, expedita
                            nisi. Magnam, numquam minima. Perferendis fugiat
                            assumenda atque. Est, natus nulla, sapiente incidunt
                            cumque corporis ipsum debitis hic saepe laboriosam
                            reprehenderit nostrum soluta facilis inventore
                            accusantium quisquam ipsam officia labore. Doloribus
                            vel rerum similique voluptatum, consectetur,
                            repellat iste eos iusto sed ipsum repudiandae!', 'This C For Beginners Course Teaches You The Python Language Fast.', 124552, 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg', true);
INSERT INTO courses (name, description, short_description, price, image, is_active) VALUES ('C++','Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa quos consequatur quasi, sunt reiciendis
                            unde quia, voluptatibus earum ad, odio aspernatur
                            amet quisquam exercitationem aperiam! Voluptate
                            expedita similique nesciunt temporibus, rem dolore
                            recusandae corporis ex impedit eligendi laboriosam.
                            Ad voluptas, earum eos maiores vero voluptate
                            voluptatem sit consectetur eum cumque quisquam optio
                            exercitationem necessitatibus nemo. Nulla, expedita
                            nisi. Magnam, numquam minima. Perferendis fugiat
                            assumenda atque. Est, natus nulla, sapiente incidunt
                            cumque corporis ipsum debitis hic saepe laboriosam
                            reprehenderit nostrum soluta facilis inventore
                            accusantium quisquam ipsam officia labore. Doloribus
                            vel rerum similique voluptatum, consectetur,
                            repellat iste eos iusto sed ipsum repudiandae!', 'This c++ For Beginners Course Teaches You The Python Language Fast.', 213.5235, 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg', true);
INSERT INTO courses (name, description, short_description, price, image, is_active) VALUES ('Javascript','Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa quos consequatur quasi, sunt reiciendis
                            unde quia, voluptatibus earum ad, odio aspernatur
                            amet quisquam exercitationem aperiam! Voluptate
                            expedita similique nesciunt temporibus, rem dolore
                            recusandae corporis ex impedit eligendi laboriosam.
                            Ad voluptas, earum eos maiores vero voluptate
                            voluptatem sit consectetur eum cumque quisquam optio
                            exercitationem necessitatibus nemo. Nulla, expedita
                            nisi. Magnam, numquam minima. Perferendis fugiat
                            assumenda atque. Est, natus nulla, sapiente incidunt
                            cumque corporis ipsum debitis hic saepe laboriosam
                            reprehenderit nostrum soluta facilis inventore
                            accusantium quisquam ipsam officia labore. Doloribus
                            vel rerum similique voluptatum, consectetur,
                            repellat iste eos iusto sed ipsum repudiandae!', 'This Javascript For Beginners Course Teaches You The Python Language Fast.', 99.99, 'https://www.freecodecamp.org/news/content/images/2021/12/chris-ried-ieic5Tq8YMk-unsplash.jpg', true);

--- insert orders ---

INSERT INTO orders (user_id, course_id, payment_completed) VALUES (1,1,true);
INSERT INTO orders (user_id, course_id, payment_completed) VALUES (2,1,true);
INSERT INTO orders (user_id, course_id, payment_completed) VALUES (1,2,true);
INSERT INTO orders (user_id, course_id, payment_completed) VALUES (3,1,false);
INSERT INTO orders (user_id, course_id, payment_completed) VALUES (3,4,true);
