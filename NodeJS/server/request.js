const http = require('http');

const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
}

const apiRequest = http.request(options, (apiRes)=> {
    apiRes.on("data", (data)=>{
        console.log(data);
    })
});

apiRequest.on("error", () => {
    console.log(e);
});

apiRequest.end();