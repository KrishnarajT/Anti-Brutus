const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.join(__dirname, "./database", "example.sqlite");

class DatabaseManager {
	constructor() {
		this.db = new sqlite3.Database(dbPath);
		this.initializeDatabase();
		this.query_result = null;
	}

	initializeDatabase() {
		const createTableQuery = `
			CREATE TABLE IF NOT EXISTS users (
				id INTEGER PRIMARY KEY autoincrement ,
				email TEXT NOT NULL unique,
				password TEXT NOT NULL,
				salt Text not Null,
				UserName Text not Null
			)
		`;

		this.db.run(createTableQuery, (err) => {
			if (err) {
				console.log("Error creating table:", err);
			} else {
				console.log("Table 'example' created or already exists.");
			}
		});
	}

	async checkUser(email) {
		return new Promise((resolve, reject) => {
			const query = "SELECT * FROM users where email = ? ";

			this.db.get(query, [email], (err, row) => {
				if (err) {
					reject(err); // Reject with the error if there's an issue with the query
				} else {
					if (row) {
						console.log("User found");
						console.log(row);
						resolve(row); // Resolve with true if the user exists
					} else {
						console.log("User not found");
						console.log(row);
						resolve(false); // Resolve with false if the user doesn't exist
					}
				}
			});
		});
	}

	async test(callback) {
		const query = `
			delete from users  
		`;
		this.db.all(query, (err, rows) => {
			if (err) {
				console.error("Error executing query:", err);
				callback(err, null);
			} else {
				console.log("Query executed successfully.");
				// console.log(rows);
				callback(null, rows);
			}
		});
	}

	async insertUser(email, password, UserName, salt) {
		return new Promise((resolve, reject) => {
			const query = `INSERT INTO users (email, password, UserName, salt)
            VALUES (?,?,?,?)`;

			this.db.run(query, [email, password, UserName, salt], (err) => {
				if (err) {
					reject(err); // Reject with the error if there's an issue with the query
				} else {
					resolve(true); // Resolve with true if the user exists
				}
			});
		});
	}

	async reset_password(email, password){
		return new Promise ((resolve, reject) => {
			const query = `UPDATE users SET password = ? WHERE email = ?`;
			this.db.run(query, [password, email], (err) => {
				if (err) {
					reject(err); // Reject with the error if there's an issue with the query
				} else {
					resolve(true); // Resolve with true if password updated successfully
				}
			});
		})
	}
	// Other methods...
}

var dbobj = new DatabaseManager();

module.exports = dbobj;
