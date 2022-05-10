const nodemailer = require('nodemailer');

const sendEmail = async (email, username, password, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'localhost',
      service: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass: password,
      },
    });

    transporter.verify().then(console.log).catch(console.error);

    await transporter.sendMail({
      from: 'babyapp@babyapp.com',
      to: email,
      subject: subject,
      text: text,
    });
    console.log('email sent sucessfully');
  } catch (error) {
    console.log('email not sent', error);
    console.log(error);
  }
};

module.exports = sendEmail;
