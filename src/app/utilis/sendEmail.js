require("dotenv").config();
const { createTransport } = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.APP_MAIL,
        pass: process.env.APP_MAIL_PASS,
      },
    });
    await transporter.sendMail({
      to,
      subject,
      text,
      from: "saifhammad411@gmail.com",
    });
  } catch (error) {
    console.log(error?.message);
  }
};

module.exports = sendEmail;
