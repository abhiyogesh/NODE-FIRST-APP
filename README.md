Node.js'Role( in Web Development)

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

# JavaScript Summary -
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


 # Improved Development Workflow and Debugging
 -  Global Features vs Core Modules vs Third-Part Modules
 * Global features : Keywords like const or function but also some global object like process
 * Core Node.js Modules : Examples would be the file system module ("fs"), the path module("path") or the       Http module ("http")
 *  Third party modules : Installed via npm install - we can add any kind of feature

 Global features are always available , you dont need to import them into the files

# Types of Errors
- Syntax Errors
- Runtime Errors
- Logical Errors