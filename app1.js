//const http = require('http');
//const routes = require('./routes');
const express = require('express');
const app = express(); //

app.use((req,res, next)=>{ // Middleware to parse URL-encoded bodies

    console.log('In the middleware!');
    next();  // Call next() to pass control to the next middleware function
            // Allows the request to continue to the next middleware in line
}); 

app.use((req,res, next)=>{ // Middleware to parse URL-encoded bodies
    console.log('In the another middleware!');
    res.send('<h1>Hello from Express!</h1>'); // Send a response to the client
}); 
// const server = http.createServer(app); // Pass the app function to handle requests
// server.listen(3000);
// This will start the server and listen on port 3000

app.listen(3000); // Start the server and listen on port 3000
 //Node life cycle
//node app.js - start script to run the server -> Parse Code, Register Variables & Functions -> Event Loop(Keeps on running as long as there are event listeners registered) -> Handle Requests