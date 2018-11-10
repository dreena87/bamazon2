DROP DATABASE IF EXISTS bamazon2_DB;
CREATE DATABASE bamazon2_DB;
USE bamazon2_DB;



CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(40),
    department_name VARCHAR(40),
    price DECIMAL(10,2),
    stock_quantity INT,
    PRIMARY KEY(id)
   
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES   

( 'Rancilio Silvia', 'Espresso machine', 550, 5),
( 'Rocket R58', 'Espresso machine', 3000, 5 ),
( 'Rocket Porta', 'Espresso machine', 2650, 2),
( 'Ascaso Dream', 'Espresso machine', 599, 8),
( 'Baratza Sette', 'Grinder', 549, 3),
( 'Nuova Simonelli', 'Grinder', 1012.50, 4),
( 'Mazzer Jolly', 'Grinder', 1199, 1),
( 'Breville Dose', 'Grinder', 179.95, 15),
( 'Hario V60', 'Scale', 52.00, 7),
('Brewista Smart', 'Scale', 89.95, 5);

SELECT * FROM products;