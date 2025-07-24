 const fs = require('fs');
 

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
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
            // fs.writeFileSync('message.txt', message); // Write the message to message.txt
            fs.writeFile('message.txt',message, (err) => {   
            res.statusCode =302;
            res.setHeader('Location','/');
            return res.end();
            console.log('Message saved to message.txt');
        });
    });
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
}

//module.exports = requestHandler; // Export the requestHandler function
// This allows the function to be used in other files, such as app.js

//for multiple exports
// module.exports = {  
//     handler : requestHandler,
//     someText: 'Some hard coded text'
// }
//module.exports.handler = requestHandler; // Export the requestHandler function
// This allows the function to be used in other files, such as app.js
//module.exports.someText = 'Some hard coded text'; // Exporting additional text
// This allows the text to be used in other files, such as app.js

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
