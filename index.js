const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res, next) => {
    res.render('homepage/home');
});

app.get('/:service/:part', (req, res, next) => {
    res.render(`${req.params.service}/${req.params.part}`);
});

app.get('*', (req, res, next) => {
    res.status(404).send("Page Not Found!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("App Started!");
})