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

	async checkUser(email) {
		console.log("Checking user");
		const query = `SELECT * FROM users WHERE email = '${email}'`;
		try {
		  const result = await this.db.run(query);
	  
		  if (result.length === 0) {
			  return { message: "User not found" };
		  } else {
			  return { message: "User found", user: result[0] };
		  }
		} catch (err) {
			console.log(err);
			return { message: "Error checking user", error: err };
		}
	  }

	async test(callback) {
		const query = `
			SELECT * FROM users
		`;
		 this.db.all(query,(err,rows)=>{
			if(err){
				console.error("Error executing query:", err);
				callback(err,null)
			}
			else {
				console.log("Query executed successfully.");
				// console.log(rows);
				callback(null,rows)
			}
		})
		
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