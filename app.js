const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler) // Pass the routes function to handle requests
server.listen(3000);
// This will start the server and listen on port 3000

 //Node life cycle
//node app.js - start script to run the server -> Parse Code, Register Variables & Functions -> Event Loop(Keeps on running as long as there are event listeners registered) -> Handle Requests