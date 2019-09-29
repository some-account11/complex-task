const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000

let feedback = undefined;

app.use(bodyParser.json());

app.post('/data', (req, res) => {
    console.log(req.body);
    if(!req.body.email) return  res.sendStatus(400);
    feedback = req.body;
    console.log(req.body);
    res.redirect('/feedback');
    res.send('Thank you for your feedback. You will receive info about it on your email: ${req.feedback.email}');
    feedback = undefined;
});

app.use(bodyParser.urlencoded({extended: false}));


app.get('/data',(req, res) ={
    // res.sendFile(__dirname + `index.html`)

});

app.use(bodyParser.urlencoded({extended: false}))

app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}/data`))


//Myhailo
//<form method="POST" action="http://localhost:3000/data"><form>
