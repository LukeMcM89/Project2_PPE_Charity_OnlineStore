DROP DATABASE IF EXISTS ppestore_db;

CREATE DATABASE ppestore_db;

-- CREATE TABLE shopper (
--     shopper_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     shopper_name VARCHAR(25) NOT NULL,
--     shopper_password VARCHAR(15) NOT NULL,
--     date_created DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
-- );

-- CREATE TABLE products (
--     products_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     products_name VARCHAR(25) NOT NULL,
--     products_description TEXT(40),
--     date_created DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
--    --COME BACK TO PROD IMAGES
--     CONSTRAINT products_id FOREIGN KEY 
-- );

-- CREATE TABLE inventory (
--     inventory_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     inventory_available SMALLINT(6) NOT NULL DEFAULT 0,
--     CONSTRAINT product_id FOREIGN KEY 
-- );

--PRODUCTS - MASKS, HANDSANITIZER BOTTLE, FACE SHIELD, GLOVES, HAND SANTIZER WIPES, TOILET PAPER