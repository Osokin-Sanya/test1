// // netlify/functions/send-email.js
// const nodemailer = require('nodemailer');

// exports.handler = async function(event, context) {
//   // Проверка, что тело запроса пришло в правильном формате
//   const body = JSON.parse(event.body);
//   console.log(body); // Логирование тела запроса для отладки

//   // Настройки транспортерa для отправки письма через Gmail
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'himera554@gmail.com', // твой email
//       pass: 'qbtfrkkmbvtqgndz',   // используй App Password от Google
//     },
//   });

//   // Данные письма
//   const mailOptions = {
//     from: 'himera554@gmail.com', // твой email
//     to: 'himera554@gmail.com', // email получателя
//     subject: 'New Message from Website',
//     text: `Message from: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
//   };

//   try {
//     // Отправка письма
//     await transporter.sendMail(mailOptions);

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Email sent successfully!' }),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
//     };
//   }
// };
//
//
//

// netlify/functions/send-to-sheet.js
exports.handler = async function (event, context) {
  const { name, email,phone, message } = JSON.parse(event.body);

  // URL скрипта Google Apps Script (замени на свой)
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxykhKFApaUiYUBGCVzwRNR3WJ914A7rqluDWYpWe-wchu4B57mOjUvp1iqDbJIv8wwJQ/exec";

  const response = await fetch(scriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, phone, message }),
  });

  if (response.ok) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Data sent to Google Sheets successfully!",
      }),
    };
  } else {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send data to Google Sheets" }),
    };
  }
};
