const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const nodemailer = require('nodemailer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'camryn.bernier@ethereal.email',
            pass: 'YfhGsas1BNkY8Ny2f2'
        }
    },
    {
        from: 'Feedback-service <camryn.bernier@ethereal.email>',
    }
);

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err)
        console.log(info);
    });
};

app.post('/data', (req, res) => {
   if (!req.body.email) return res.sendStatus(400);
    const messageToClient = {
        to: req.body.email,
        subject: `Feedback info`,
        html: `<h3>Thank you for your feedback. It's very important for us</h3>
                <p>We received your feedback</p>
                <span>${req.body.comment}</span>`
    };
    const messageToAdmin = {
        to: 'kuryloff@gmail.com',
        subject: `Feedback info`,
        html: `<h3>Feedback received</h3>
               <span><b>From:</b>${req.body.email}</span><br>
               <span>${req.body.comment}</span>`
    };
    mailer(messageToClient);
    mailer(messageToAdmin);
});

app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`))


