const http = require('http');
const PORT = 3022;
const hostname = 'Localhost';

const server = http.createServer((req, res) => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({error: 'Server Error'}));
});

server.listen(PORT, () => {
    console.log(`Server running at ${hostname}: ${PORT}`);
});