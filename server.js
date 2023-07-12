const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = 3000;

app.use(express.static('public'))
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a MySQL connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'username',
//   password: 'password',
//   database: 'barbershop_db'
// });



// Connect to MySQL
// connection.connect(err => {
//   if (err) throw err;
//   console.log('Connected to MySQL!');
// });

// Set up the route for the homepage
app.get('/', (req, res) => {
  // Fetch data from the database
  // connection.query('SELECT * FROM services', (err, rows) => {
  //   if (err) throw err;

    // Render the homepage template with the fetched data
    res.render('index');
 // });
});

app.get('/gallery', (req, res) => {
 
      // Render the forum view and pass the user and threads to it
      res.render('gallery');
   
});
app.get('/about', (req, res) => {
 
  // Render the forum view and pass the user and threads to it
  res.render('about');

});

app.post('/submit', async (req, res) => {
  const { name, email, phone, date, time, message } = req.body;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'muzanenhamoclint@gmail.com',
      pass: 'pcinxceycypvmfkr',
    },
  });

  const mailOptions = {
    from:  `<${email}>`,
    to: 'stevenmuzanenhamo81@gmail.com',
    subject: 'New Appointment Request from ' + req.body.email,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Date: ${date}
      Time: ${time}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while sending the email.' });
  }
});

// Create a transport object with your SMTP configuration
// const transporter = nodemailer.createTransport({
//   service: 'smtp.gmail.com', // e.g., Gmail, Yahoo
//   port: 465,
//    secure: true,
//   auth: {
//     user: 'muzanenhamoclint@gmail.com',
//     pass: 'pcinxceycypvmfkr',
//   },
// });
// // Define a POST route to handle the form submission
// // Handle form submission
// app.post('/submit', (req, res) => {
//   const { name, email, phone, date, time, message } = req.body;

  

//   // Create email content
//   const mailOptions = {
//     from: `${name} <${email}>`,
//     to: 'swifty2205@yahoo.co.uk', // Steven's email address
//     subject: 'New Appointment Request',
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Phone: ${phone}
//       Date: ${date}
//       Time: ${time}
//       Message: ${message}
//     `,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error:', error);
//       res.status(500).json({ error: 'An error occurred while sending the email.' });
//     } else {
//       console.log('Email sent:', info.response);
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//       res.json({ message: 'Appointment request submitted successfully.' });
//     }
//   });
// });




// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
