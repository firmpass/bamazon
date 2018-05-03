DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

USE bamazonDB;

INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("Sony Playstation 4 Pro 1 TB", "Electronics", 339.99, 5);

INSERT into products (product_name, department_name, price, stock_quantity) 
VALUES ("Samsonite Winfield 2 3pc Hardside", "Luggage", 285.35, 10);

INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("1 Carat 14K White Gold Pear Diamond Solitaire Pendant Necklace", "Jewelry", 2300.00, 3);

INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("The Fintech Book", "Business & Money", 27.16, 23);

INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("Apple iMac MC309LL Desktop certified refurbished", "Electronics", 424.87, 14);

INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("Beats Solo3 Wireless On-Ear Headphones", "Electronics", 197.00, 134);

INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("Amazon Echo Smart speaker with Alexa", "Electronics", 99.99, 37);

INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("Mellanni Thermal Insulated Blackout", "Home Decor", 13.60, 29);

INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("Scott Living Emmett Beige Sectional refuge", "Furniture", 1600.00, 3);

INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("Onkyo TX-RZ810 7.2 Channel Network A/V Receiver", "Electronics", 549.00, 4);