const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url =='/')
    {
        res.write('<h1>Hello, NodeJS </h1>');
    } else if(req.url == '/about')
    {
        res.write('<h1>About Page </h1>');
    }
    res.end();
})

server.listen(5002);
console.log('The HTTP server is running on port 5002');