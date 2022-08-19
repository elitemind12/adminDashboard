const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/users', (req, res) => {
    res.render('users');
})

app.get('/alerts', (req, res) => {
    res.render('alerts');
})

app.get('/blank-page', (req, res) => {
    res.render('blank-page');
})

app.get('/buttons', (req, res) => {
    res.render('buttons');
})

app.get('/cards', (req, res) => {
    res.render('cards');
})

app.get('/form-elements', (req, res) => {
    res.render('form-elements');
})

app.get('/icons', (req, res) => {
    res.render('icons');
})

app.get('/invoice', (req, res) => {
    res.render('invoice');
})

app.get('/mdi-icons', (req, res) => {
    res.render('mdi-icons');
})

app.get('/notification', (req, res) => {
    res.render('notification');
})

app.get('/settings', (req, res) => {
    res.render('settings');
})

app.get('/signin', (req, res) => {
    res.render('signin');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.get('/tables', (req, res) => {
    res.render('tables');
})

app.get('/typography', (req, res) => {
    res.render('typography');
})

app.listen(port, () => {
    console.log("listening to port 3000");
})