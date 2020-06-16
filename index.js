const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const PORT = process.env.PORT || 3000;


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/login', function (req, res) {
    res.render('pages/login');
})

app.listen(PORT);