const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.join(__dirname,"./database","example.sqlite");


class DatabaseManager {
	constructor() {
		this.db = new sqlite3.Database(dbPath);
		this.initializeDatabase();
		this.query_result = null;
	}

	initializeDatabase() {
		const createTableQuery = `
			CREATE TABLE IF NOT EXISTS users (
				id INTEGER PRIMARY KEY ,
				email TEXT NOT NULL,
				password TEXT NOT NULL
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
    async test()  {
        const query = `
            SELECT * FROM users
        `;

        this.db.run(query, (err) => {
            if (err) {
                console.log("Error creating table:", err);
            } else {
                console.log("Table 'example' created or already exists.");
            }
        });
    }

	async insertUser(email ,password) {
        const insertQuery = `
            INSERT INTO users (email, password)
            VALUES (?, ?)
        `;
	
        this.db.run(insertQuery, [email,password], (err) => {
            if (err) {
                console.log("User not inserted.", err);
				return false
            } else {
                console.log("User inserted successfully.");
				return true;
            }
        });
    }
	// Other methods...
}

var dbobj = new DatabaseManager();

module.exports = dbobj;