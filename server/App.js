// creating a basic server with express and nodemon.
// using it to process the database queries.

const express = require("express");
const dbobj = require("./db_manager");
const cors = require("cors");
const createHttpError = require("http-errors");



app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/about", (request, response) => {
	response.send("<h1>About</h1>");
});

app.get("/test", async (request, response) => {
	const result = await dbobj.test();
	console.log("from the app.js file");
	console.log(result);
	response.send(result);
});

// processing post request

// login
app.post("/auth", async (request, response) => {
	console.log(request.query);

	// check if the user exists in the database
	const user_fate = await dbobj.checkUser(request.query.username);
	console.log("from the app.js file");
	console.log(user_fate);
	if (user_fate.message == "user not found") {
		// send a message to the client
		response.send({ user_data: user_fate, message: user_fate.message });
	} else if (user_fate.message == "user found") {
		// send the salt and the final password hash to the client
		response.send({ user_data: user_fate, message: user_fate.message });
	} else {
		const error = new createHttpError.BadRequest("something went wrong");
		return error;
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
		await send_mail(
			request.query.user_email,
			"Password Reset",
			request.query.user_otp
		)
			.then((res) => {
				console.log(res);
				response.send({ message: "email sent" })
				dbobj.add_otp(request.query.user_otp, user_fate[0].user_id);
			})
			.catch((err) => {
				console.log(err);
			});

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


