// netlify/functions/send-email.js
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Настройки транспортерa для отправки письма через Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'himera554@gmail.com', // твой email
      pass: 'qbtfrkkmbvtqgndz', // используй App Password от Google
    },
  });

  // Данные письма
  const mailOptions = {
    from: 'himera554@gmail.com', // твой email
    to: 'himera554@gmail.com', // email получателя
    subject: 'New Message from Website',
    text: `Message from: ${event.body.name}\nEmail: ${event.body.email}\nMessage: ${event.body.message}`,
  };

  try {
    // Отправка письма
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
    };
  }
};
