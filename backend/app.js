const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
let feedback = undefined;
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ottis.hamill38@ethereal.email',
            pass: 'FQXvwCaW1GpmuUWRy8'
        }
    },
    {
        from: 'Feedback-service <ottis.hamill38@ethereal.email>',
    }
);

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        alert('You left a feedback', info);
    });
};

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));


app.post('/data', (req, res) => {
    console.log(req.body);
    if (!req.body.email) return res.sendStatus(400);
    const messageToClient = {
        to: req.body.email,
        subject: `Feedback info`,
        html: `<h3>Thank you for your feedback. It's very important for us</h3>
                <p>We received your feedback</p>
                <span>${req.body.feedback}</span>`
    };
    const messageToAdmin = {
        to: 'kuryloff@gmail.com',
        subject: `Feedback info`,
        html: `<h3>Feedback received</h3>
               <span><b>From:</b>${req.body.email}</span><br>
               <span>${req.body.feedback}</span>`
    };
    mailer(messageToClient);
    mailer(messageToAdmin);
    feedback = req.body;
    console.log(req.body);
    // res.redirect('/feedback');
    // res.send('Thank you for your feedback. You will receive info about it on your email: ${req.feedback.email}');
    feedback = undefined;
});


app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}/data`))

//Myhailo
// postData(): Observable<any> {
//     return this.http.post(this.url, this.myForm.value, {responseType: 'json'});
//   }

