const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res, next) => {
    res.render('home');
});

app.get('*', (req, res, next) => {
    res.status(404).send("Page Not Found!");
});

app.listen(3000, () => {
    console.log("App Started!");
})