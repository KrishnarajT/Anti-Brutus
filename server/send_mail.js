var nodemailer = require("nodemailer");
const fs = require("fs");
var path = require("path");

var password_file_path = path.join(__dirname, "./password.txt");
const email_id = "puzzlelists@gmail.com";

async function read_file() {
  return new Promise((resolve, reject) => {
    fs.readFile(password_file_path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

async function send_mail(to, subject, otp) {
  const email_pass = await read_file();
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email_id,
        pass: email_pass,
      },
    });

    var mailOptions = {
      from: email_id,
      to: to,
      subject: subject,
      text: `We get it, Stuff happens, Here's your One Time Password to Sign In again!. Please keep it Private, and do not share with anyone.\n${otp}\nIf you did not request a password reset, please ignore this email or reply to let us know. This password reset is only valid for the next 30 minutes.\nThanks,\nThe Poco Loco Team\n`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });
}
// send_mail().then(
// 	(result) => {
// 		if (result) {
// 			console.log("Mail sent");
// 		}
// 	},
// 	(err) => {
// 		console.log(err);
// 	}
// );

module.exports = send_mail;
