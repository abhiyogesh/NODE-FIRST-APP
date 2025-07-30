# 1-Node.js'Role( in Web Development)

# Run Server - Create Server & Listen to Incoming Requests
# Business Logic - Handle Requests, Validate Input , Connect to Database
# Responses - Return Responses(Rendered HTML, JSON..)

# Running Node.js Code

1.- The REPL - using the terminal and in that node environment
* Read - Read User Input
* Eval - Evaluate User Input
* Print - Print Output (Result)
* Loop - Wait for new Input

2. Execute Files
- Used for real apps
- Predictable sequence of steps

# 2-JavaScript Summary -
- Weakly Typed Language
- Object Oriented Language
- Versatile Language
- No explicit type assignment
- Data types can be switched dynamically
- Data can be organized in logical objects
- Primitive and reference types
- Runs in browser & directly on a PC/server
- Can perform a broad variety of tasks 

# How Web Works
# Create a Node.js Server

- Core Modules
-http - launch a server, send requests
-https
-fs(file system)
-path
-os(operating system)


# Node.js Program Lifecycle
node app.js - start script to run the server -> Parse Code, Register Variables & Functions -> Event Loop(Keeps on running as long as there are event listeners registered) ->process.exit(); 

# Streams & Buffers
# Single Thread, Event Loop & Blocking Code
- Node.js is a single JavaScript Thread 

# Module Summary
- How the web wokrs
Client -> Request -> Server -> Response -> Client 
- Program LifeCycle & Event loop
-> Node.js runs non-blocking js code and uses an event driven code ("Event Loop") for running your logic
-> A Node program exits as soon as there is no more work to do
-> Note : The createServer() event never finishes by default

- Asynchronous Code
-> JS code is non blocking 
-> Use callbacks and events 
=> Order Changes !

- Request & Responses
 -> Parses request data in chunks (Streams & Buffers)
 -> Avoid "double responses"

- The Node Module System
 -> Import via require ('./path) for custom files or require ('module) for core & third-party modules
 -> Export via module.exports or just exports (for multiple exports  )


 # 3-Improved Development Workflow and Debugging
 -  Global Features vs Core Modules vs Third-Part Modules
 * Global features : Keywords like const or function but also some global object like process
 * Core Node.js Modules : Examples would be the file system module ("fs"), the path module("path") or the       Http module ("http")
 *  Third party modules : Installed via npm install - we can add any kind of feature

 Global features are always available , you dont need to import them into the files

# Types of Errors
- Syntax Errors
- Runtime Errors
- Logical Errors


# 4-Express.JS
- npm install --save express
-npm install --save body-parser - for parsing the URL

# Q - What is express.js ?
- Express.js is Node.js framework - a package that adds a bunch of utility functions and tools and a clear
set of rules how the app should be built (middleware!)
- Its highly extensible and other packages can be plugged into it (middleware!)

# Middleware, next() and res()
- Express.js relies heavily on middleware functions -
  you can easily add them by calling use()
- Middleware functions handle a request and should call next() to forward the request to the next function
  in line or send a response  

# Q- Explain middleware in express.js - very important
# Q Explain routing works in express.js - very important

# Q - what is res.send in express.js
res.send() in Express.js:
This method is used to send various types of HTTP responses back to the client from an Express server. It is a versatile method that automatically handles content-type and content-length headers based on the data provided.

# Q - what is the use of middleware in node js
# Q - what is app.use in expres.js in node.js
- The app.use() function in Express.js adds middleware to the application's request-processing pipeline. It applies the specified middleware to all incoming requests or to specific routes, allowing you to modify request/response objects, perform operations, or handle errors throughout the application.
- syntax - app.use(path, callback)

# Q - How to filter path of routes in Express.js ?
- https://www.geeksforgeeks.org/node-js/how-to-filter-path-of-routes-in-express-js/

# Q- What is sendFile in express.js ?

# Core Module in node.js  - 'Path'
# Q - how to serve html pages in express.node.js ?
# Q - what is path.join(__dirname) in express.js ?
# Q - what is path.dirname(process.mainModule.filename); ?
# Q - how to serve files or css files statically in express.js ?


# Working with Dynamic Content & Adding Templating Engines 
 npm install --save ejs pug express-handlebars

# Q - What is Templating Engines in Node.js ?
# Q - What is EJS in Node.js ?
# Q - What is Pug in Node.js ? 
# Q - What is Handlebars in Node.js ?
# Q - What is the difference between EJS and Pug in Node.js ?
# Q - What is the difference between EJS and Handlebars in Node.js ?
# Q - What is the difference between Pug and Handlebars in Node.js ?
# Q - What is the difference between EJS, Pug and Handlebars in Node.js ?
# Q - How to use EJS in Node.js ?
# Q - How to use Pug in Node.js ?
# Q - How to use Handlebars in Node.js ?
# Q - How to use Templating Engines in Node.js ?
# Q - How to render dynamic content in Node.js, Express.js ?
# Q - How to render dynamic content in EJS, Pug, Handlebars ?
# Q - What is the difference between rendering and sending in Node.js ?
# Q - How to render HTML pages in Node.js, Express.js ?
# Q - How to app.set view engine in Express.js ?
# Q - How to app.set views in Express.js ?
