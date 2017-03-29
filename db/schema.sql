use burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	bname varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	order_date TIMESTAMP  DEFAULT  NOW(),
	PRIMARY KEY (id)
);