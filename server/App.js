// creating a basic server with express and nodemon.
// using it to process the database queries.

const express = require("express");
const dbobj = require("./db_manager");
const cors = require("cors");
const createHttpError = require("http-errors");
const app = express()
app.use(cors())



app.get("/", (req, res) => {
	res.send("Home");
});


app.get("/about", (request, response) => {
	response.send("<h1>About</h1>");
});

app.get("/test", async (request, response) => {
	await dbobj.test((err, rows) => {
		if (err) {
			response.status(500).json({ error: 'Internal Server Error' });
		}
		else {
			response.status(200).json(rows);
		}
	});
	console.log("from the app.js file");
});

// processing post request

// login
app.post("/auth", async (request, response) => {
	console.log(request.query);

	// check if the user exists in the database
	const user_fate = await dbobj.checkUser(request.query.username);
	// console.log("from the app.js file");
	console.log(user_fate);
	if (user_fate.message === "user not found") {
		// send a message to the client
		return { user_data: user_fate, message: user_fate.message };
	} else if (user_fate.message === "user found pass correct") {
		// send the salt and the final password hash to the client
		return { user_data: user_fate, message: user_fate.message };
	} else {
		const error = new createHttpError.BadRequest("something went wrong! Call the Devs!");
		return error;
	}
});

//add User
app.post("/add_user", async (request, response) => {
	const username = request.query.email
	try{
		//checking if user exists
		const existingUSer = await dbobj.checkUser(username);
		console.log(existingUSer)
		if (existingUSer=== false){
			console.log(existingUSer)
			//user does not exist, so add the user to the database
			const userInsert = await dbobj.insertUser(
				request.query.email,
				request.query.password
			);
			// user inserted successfully
			if (!userInsert) {
				response.send({ message: "user inserted successfully" });
			}
			// user not inserted
			else {
				response.send({ message: "user not inserted" });
			}
			
		}else{
			//user exists, send a message to the client
			console.log(existingUSer)
			response.send({exist: true, message: "user already exists" });
		}

	}catch(error){
		console.log(error);
		response.send({message: "something went wrong"});
	}
	

});


// signup
app.post("/signup", async (request, response) => {
	console.log(request.query);
	// check if the user exists in the database
	const user_fate = await dbobj.checkUser(request.query.username);
	console.log("from the app.js file");
	console.log(user_fate);

	if (user_fate.message == "user not found") {
		// push to database.
		const signup_result = await dbobj.add_user(
			request.query.username,
			request.query.user_pass_hash,
			request.query.user_email,
			request.query.user_salt
		);
		if (signup_result) {
			response.send({ message: "signup successful" });
		} else {
			response.send({ message: "signup failed" });
		}
	} else if (user_fate.message == "user found") {
		// send a message to the client
		response.send({ message: "user exists" });
	}
});

app.post("/send_email", async (request, response) => {
	console.log(request.query);
	// check if the user exists in the database
	const user_fate = await dbobj.checkUserEmail(request.query.user_email);
	console.log("from the app.js file");
	console.log(user_fate);
	if (user_fate.message == "user not found") {
		// send a message to the client
		response.send({ message: "email not sent" });
	} else if (user_fate.message == "user found") {
		// send the salt and the final password hash to the client
	}
});

app.post("/reset_password", async (request, response) => {
	console.log(request.query);
	// check if the user exists in the database
	const user_fate = await dbobj.checkUserEmail(request.query.user_email);
	console.log("from the app.js file");
	console.log(user_fate);
	if (user_fate.message == "user not found") {
		// send a message to the client
		response.send({ message: "user not found" });
	} else if (user_fate.message == "user found") {
		// send the salt and the final password hash to the client
		const reset_result = await dbobj.reset_pass(
			request.query.user_hash,
			request.query.user_salt,
			user_fate[0].user_id,
			request.query.user_otp
		);
		if (reset_result) {
			response.send({ message: "password reset successful" });
		} else {
			response.send({ message: "otp invalid" });
		}
	}
});


module.exports = app;