const http = require('http');

const PORT = 3030;
const hostname = 'localhost';

const server = http.createServer((req,res)=>{
    // Home page
    // About Page
    // Contact Page
    // Product Page
    // Rest..> Error

    if(req.url == '/')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to Node JS server by Anishka');
    }
    else if(req.url == '/about')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is about');
    }
    else if(req.url == '/contact')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("This is contact info");
    }
    else if(req.url == '/product')
    {
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }
        
        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(data.toString());
            })
        });
        
        apiReq.on("error", ()=>{
            console.log(e);
        })
        
        apiReq.end();
    }
    else
    {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({error: "Server error"}));
    }

    // res.statusCode = 500;
    // res.setHeader('Content-Type', 'application/json');
    // // res.end('Node Server created by Anishka');
    // res.end(JSON.stringify({error: "Server error"}));
});

server.listen(PORT, () => {
    console.log(`Server running at ${hostname}: ${PORT}`);
});