CREATE DATABASE `imersao17`;

use `imersao17`;

CREATE TABLE `categories` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `imersao17`.`categories` (`id`,`name`) VALUES ("6b4c28f4-6831-495a-9444-19c93452faa3","Relogios");
INSERT INTO `imersao17`.`categories` (`id`,`name`) VALUES ("7c0ca0d4-ff23-4bd7-b131-c563067c4b43","Eletronicos");

CREATE TABLE `products` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category_id` varchar(36) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_categories_idx` (`category_id`)
);

INSERT INTO `imersao17`.`products` (`id`,`name`,`description`,`price`,`category_id`,`image_url`)
VALUES ("7f8c9d8e-9f0a-1b2c-3d4e-5f6g7h8i9j0k","Product 1","Description 1", 100, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/1.png"),
("66805003-f9a2-4772-b577-d5ff66207707","Product 2","Description 2", 200, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/2.png"),
("121829b9-e9f9-4ca9-bd14-b087afedd587","Product 3","Description 3", 300, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/3.png"),
("ef3d9a49-4c73-4192-97dd-55e21c0e2707","Product 4","Description 4", 400, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/4.png"),
("6d602b3a-1e72-4b03-a29c-14095e57027b","Product 5","Description 5", 500, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/5.png"),
("dad6f8fb-3149-4d0b-861e-03d29c6accf0","Product 6","Description 6", 600, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/6.png"),
("61c176d5-f4f9-4fbd-a892-41058422868e","Product 7","Description 7", 700, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/7.png"),
("ed394062-14bc-4ff2-bf43-a77473322171","Product 8","Description 8", 800, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/8.png"),
("4e6d8a64-5389-4623-ad40-e3f95b0607f7","Product 9","Description 9", 900, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/9.png"),
("924e4979-f471-4a3f-bf52-d3316485c06c","Product 10","Description 10", 1000, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/10.png"),
("80a22ccc-50f6-40ed-a18d-8cd152ae40f9","Product 11","Description 11", 1100, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/11.png"),
("740d95cb-c9be-4c2c-992d-8ad53e6b5d0c","Product 12","Description 12", 1200, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/12.png"),
("04c4353a-3f6d-4272-a8f2-44b82c05ecc0","Product 13","Description 13", 1300, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/13.png"),
("8db7d6a5-43f0-420a-8023-7b37b21bec27","Product 14","Description 14", 1400, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/14.png"),
("557be765-4f09-49b1-bd33-b7e30fc7316c","Product 15","Description 15", 1500, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/15.png"),
("0afa7630-4fc1-4d69-beed-4f8f15becadc","Product 16","Description 16", 1600, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/16.png"),
("2261af8a-e453-42e2-b2b0-ea268bb11a41","Product 17","Description 17", 1700, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/17.png"),
("fbe61a31-7bb4-4e53-9268-9138d4d038d3","Product 18","Description 18", 1800, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/18.png"),
("506610a1-ba99-4c14-a7b2-3c52877e8ec2","Product 19","Description 19", 1900, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/19.png"),
("eb296629-1fce-43ca-8413-1b3bddd07106","Product 20","Description 20", 2000, "6b4c28f4-6831-495a-9444-19c93452faa3", "http://localhost:9000/products/20.png");

