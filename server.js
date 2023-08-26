require('dotenv').config()
const nodemailer = require("nodemailer");
(async function run() {
    console.log("Running my daily report");

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "vishal32gaykwad@gmail.com",
          pass: "essxrszzhbcewrzs",
        },
    });

      const info = await transporter.sendMail({
        from: '"Vishal👻" vishal32gaykwad@gmail.com', // sender address
        to: "Hello, vicky94gaikwad@gmail.com", // list of receivers
        subject: "Daily Report ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `
        <h3>Daily report</h3>`, // html body
      });
})();