// Importing required modules
const express = require("express");
const dbobj = require("./db_manager");
const cors = require("cors");
const createHttpError = require("http-errors");
const app = express();
const send_mail = require("./send_mail");
const otp = require("./OTP");
const get_data = require("./firebase");
// Enable CORS
app.use(cors());

// Importing crypto module for generating salt and hashing password
const crypto = require("crypto");
const { reverse } = require("dns");

// Function to generate a random salt
function generateSalt() {
  return crypto.randomBytes(5).toString("hex");
}

//Function to create DEK for encryption
function generateDEK(email, salt, string) {
  const key = email + salt;
  const cipher = crypto.createCipher("aes-256-cbc", key);
  let dek = cipher.update(string, "utf8", "hex");
  dek += cipher.final("hex");
  return dek;
}

function decryptDEK(dek, email, salt) {
  const key = email + salt;
  const decipher = crypto.createDecipher("aes-256-cbc", key);
  let secretKey = decipher.update(dek, "hex", "utf8");
  secretKey += decipher.final("utf8");
  return secretKey;
}

function encryptDEK(dek, kek) {
  const cipher = crypto.createCipher("aes-256-cbc", kek);
  let encryptedDEK = cipher.update(dek, "utf8", "hex");
  encryptedDEK += cipher.final("hex");
  return encryptedDEK;
}

// Function to hash password with salt
function hashPassword(password, salt) {
  const hash = crypto.createHash("sha256");
  hash.update(password + salt);
  return hash.digest("hex");
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
  const KEK = await get_data("KEK");
  await dbobj.test((err, rows) => {
    if (err) {
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log(KEK);
      response.send("hi");
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
    const current_password = hashPassword(
      request.query.password,
      user_fate.salt
    );
    if (current_password === user_fate.password) {
      console.log("password correct");
      return response.send({
        user_data: user_fate,
        message: "user found pass correct",
      });
    } else {
      console.log("password incorrect");
      return response.send({
        user_data: user_fate,
        message: "user found pass incorrect",
      });
    }
  } else {
    // Send an error message if something went wrong
    const error = new createHttpError.BadRequest(
      "something went wrong! Call the Devs!"
    );
    return error;
  }
});

// Route for adding a new user
app.post("/add_user", async (request, response) => {
  const username = request.query.email;
  try {
    // Check if user already exists
    const existingUSer = await dbobj.checkUser(username);
    console.log(existingUSer);
    if (existingUSer === false) {
      console.log(existingUSer);
      // Generate salt and hash password
      const salt = generateSalt();
      const DEK = generateDEK(
        request.query.email,
        salt,
        request.query.special_string
      );
      const KEK = await get_data("KEK");
      const encrypted_DEK = encryptDEK(DEK, KEK);
      const hash_password = hashPassword(request.query.password, salt);
      // Add the user to the database
      const userInsert = await dbobj.insertUser(
        request.query.email,
        hash_password,
        request.query.UserName,
        salt,
        encrypted_DEK
      );
      // Send a success message if user inserted successfully
      console.log("Debug Insert USer: " + userInsert);
      if (userInsert) {
        response.send({ message: "user inserted successfully" });
      }
      // Send an error message if user not inserted
      else {
        response.send({ message: "user not inserted" });
      }
    } else {
      // Send a message to the client if user already exists
      console.log(existingUSer);
      response.send({ exist: true, message: "user already exists" });
    }
  } catch (error) {
    // Send an error message if something went wrong
    console.log(error);
    response.send({ message: "something went wrong" });
  }
});

// Route for sending oTP email
app.post("/send_email", async (request, response) => {
  console.log(request.query);
  if (!request.query.email) {
    response.send({ message: "email not sent" });
    return;
  }
  // Check if the user exists in the database
  const user_fate = await dbobj.checkUser(request.query.email);
  console.log(user_fate);
  if (user_fate === false) {
    // Send a message to the client if user not found and send password reset email
    const generated_Otp = otp();
    send_mail(request.query.email, "OTP Verification", generated_Otp);
    response.send({ message: "email sent", OTP: generated_Otp });
  } else if (user_fate) {
    // Send a message to the client if user found and email not sent
    response.send({ message: "email not sent" });
  }
});

app.post("/send_reset_email", async (request, response) => {
  console.log(request.query);
  if (!request.query.email) {
    response.send({ message: "email not sent" });
    return;
  }
  // Check if the user exists in the database
  const user_fate = await dbobj.checkUser(request.query.email);
  console.log(user_fate);
  if (user_fate === false) {
    // Send a message to the client if user not found and send password reset email
    response.send({ message: "email not sent" });
  } else if (user_fate) {
    // Send a message to the client if user found
    const generated_Otp = otp();
    send_mail(request.query.email, "Password Reset", generated_Otp);
    response.send({ message: "email sent", OTP: generated_Otp });
  }
});

// Route for resetting user password
app.post("/reset_password", async (request, response) => {
  console.log(request.query);
  // Check if the user exists in the database
  const user_fate = await dbobj.checkUser(request.query.email);
  console.log(user_fate);
  if (user_fate) {
    // Send a message to the client if user found
    const new_password = hashPassword(request.query.password, user_fate.salt);
    const reset_result = await dbobj.reset_password(
      request.query.email,
      new_password
    );
    if (reset_result) {
      response.send({ message: "success" });
    } else {
      response.send({ message: "failure" });
    }
  } else {
    // Reset user password if OTP is valid
    response.send({ message: "user not found" });
  }
});

// Exporting the app module
module.exports = app;
