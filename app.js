const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);
    //process.exit(); // This will stop the server immediately
    const url = req.url;
    const method = req.method
    if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
    }
    if(url === '/message' && method === 'POST') {
        const body =[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            //body.push(chunk.toString()); // Convert Buffer to string
            body.push(chunk); // Keep as Buffer
        });
       return req.on('end',() =>{
            const parsedBody = Buffer.concat(body).toString(); // Concatenate all chunks and convert to string
            console.log(parsedBody); // Log the full message
            const message = parsedBody.split('=')[1]; // Extract the message part
            fs.writeFileSync('message.txt', message); // Write the message to message.txt
            res.statusCode =302;
            res.setHeader('Location','/');
            return res.end();
            console.log('Message saved to message.txt');
        })
        //fs.writeFileSync('message.txt', 'Dummy'); // This will write 'Dummy' to message.txt
        // res.statusCode =302;
        // res.setHeader('Location','/');
        // return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
    //res.end('Hello from Node.js Server!'); // Alternative way to send response

});
server.listen(3000);


//node app.js - start script to run the server -> Parse Code, Register Variables & Functions -> Event Loop(Keeps on running as long as there are event listeners registered) -> Handle Requests