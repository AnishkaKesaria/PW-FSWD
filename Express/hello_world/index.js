const express = require('express');

const app = express();
const PORT = 4010;
const hostname = 'localhost';

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/about', (req, res) => {
    res.send('About Page');
})

app.get('/contact', (req, res) => {
    res.send('Contact Page');
})

app.listen(PORT, () => {
    console.log(`Server running at ${hostname}: ${PORT}`);
});