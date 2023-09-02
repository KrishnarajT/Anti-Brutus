CREATE TABLE if not exists users (
	id integer PRIMARY KEY AUTOINCREMENT,
	UserName text,
	email text UNIQUE,
	password text,
	DEK text
);

CREATE TABLE if not exists vaults (
	vault_id integer PRIMARY KEY AUTOINCREMENT,
	vault_name string,
	vault_description integer,
	user_email text,
	FOREIGN KEY (user_email) REFERENCES users (email)
);

CREATE TABLE if not exists passwords (
	user_id integer,
	pass_id integer PRIMARY KEY AUTOINCREMENT,
	vault_id integer,
	website_url string,
	description string,
	password string,
	username string,
	phone_no string,
	icon string,
	FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (vault_id) REFERENCES vaults (vault_id)
);