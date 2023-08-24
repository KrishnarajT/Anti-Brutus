// Importing required modules
const express = require("express");
const dbobj = require("./db_manager");
const cors = require("cors");
const createHttpError = require("http-errors");
const app = express()
const send_mail = require("./send_mail");
const otp = require("./OTP");

// Enable CORS
app.use(cors())

// Importing crypto module for generating salt and hashing password
const crypto = require('crypto');

// Function to generate a random salt
function generateSalt() {
    return crypto.randomBytes(5).toString('hex');
}

// Function to hash password with salt
function hashPassword(password, salt) {
    const hash = crypto.createHash('sha256');
    hash.update(password + salt);
    return hash.digest('hex');
}

// Route for home page
app.get("/", (req, res) => {
    res.send("Home");
});

// Route for about page
app.get("/about", (request, response) => {
    response.send("<h1>About</h1>");
});

// Route for testing database connection
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

// Route for user authentication
app.post("/auth", async (request, response) => {
    console.log(request.query);

    // Check if the user exists in the database
    const user_fate = await dbobj.checkUser(request.query.email);
    console.log(user_fate);
    if (user_fate === false) {
        // Send a message to the client if user not found
        return response.send({ user_data: user_fate, message: "user not found" });
    } else if (user_fate) {
        // Send the salt and the final password hash to the client if user found
        const current_password = hashPassword(request.query.password, user_fate.salt);
        if (current_password === user_fate.password) {
            console.log("password correct")
            return response.send({ user_data: user_fate, message: "user found pass correct" });
        } else {
            console.log("password incorrect")
            return response.send({ user_data: user_fate, message: "user found pass incorrect" });
        }
    } else {
        // Send an error message if something went wrong
        const error = new createHttpError.BadRequest("something went wrong! Call the Devs!");
        return error;
    }
});

// Route for adding a new user
app.post("/add_user", async (request, response) => {
    const username = request.query.email
    try{
        // Check if user already exists
        const existingUSer = await dbobj.checkUser(username);
        console.log(existingUSer)
        if (existingUSer=== false){
            console.log(existingUSer)
            // Generate salt and hash password
            const salt = generateSalt();
            const hash_password = hashPassword(request.query.password, salt);
            // Add the user to the database
            const userInsert = await dbobj.insertUser(
                request.query.email,
                hash_password,
                request.query.UserName,
                salt
            );
            // Send a success message if user inserted successfully
            console.log("Debug Insert USer: " + userInsert)
            if (userInsert) {
                response.send({ message: "user inserted successfully" });
            }
            // Send an error message if user not inserted
            else {
                response.send({ message: "user not inserted"});
            }
            
        }else{
            // Send a message to the client if user already exists
            console.log(existingUSer)
            response.send({exist: true, message: "user already exists" });
        }

    }catch(error){
        // Send an error message if something went wrong
        console.log(error);
        response.send({message: "something went wrong"});
    }
});

// Route for sending oTP email
app.post("/send_email", async (request, response) => {
    console.log(request.query);
    // Check if the user exists in the database
    const user_fate = await dbobj.checkUser(request.query.email);
    console.log(user_fate);
    if (user_fate === false) {
        // Send a message to the client if user not found and send password reset email
        const generated_Otp = otp();
        send_mail(request.query.email, "Password Reset", generated_Otp)
        response.send({ message: "email sent" , OTP: generated_Otp});
    } else if (user_fate === true) {
        // Send a message to the client if user found and email not sent
        response.send({ message: "email not sent" });
    }
});

// Route for resetting user password
app.post("/reset_password", async (request, response) => {
    console.log(request.query);
    // Check if the user exists in the database
    const user_fate = await dbobj.checkUserEmail(request.query.user_email);
    console.log(user_fate);
    if (user_fate.message === "user not found") {
        // Send a message to the client if user not found
        response.send({ message: "user not found" });
    } else if (user_fate.message === "user found") {
        // Reset user password if OTP is valid
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

// Exporting the app module
module.exports = app;
