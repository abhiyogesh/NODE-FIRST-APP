# 1-Node.js'Role( in Web Development)
- Node.js is a runtime environment that allows you to run JavaScript code on the server side.
- It is built on the V8 JavaScript engine, which is used in Google Chrome.

# Run Server - Create Server & Listen to Incoming Requests
- Node.js is used to create web servers that can handle HTTP requests and responses.
- It allows you to build scalable and high-performance applications using JavaScript.
# Business Logic - Handle Requests, Validate Input , Connect to Database
- Node.js is used to implement the business logic of your application, such as handling user requests, validating input, and connecting to databases.
- It provides a non-blocking, event-driven architecture that allows you to handle multiple requests concurrently.
# Responses - Return Responses(Rendered HTML, JSON..)
- Node.js is used to send responses back to the client, such as rendering HTML pages or returning JSON data.
- It allows you to create APIs that can be consumed by client-side applications or other services.

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
- JavaScript is a programming language that is primarily used for web development.
- It is a versatile language that can be used for both client-side and server-side development.
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
- Client - Browser
- Request - HTTP Request    
# Create a Node.js Server
- Server - Node.js Server
- Response - HTTP Response

- Core Modules
- Node.js has a set of built-in modules that provide various functionalities.
- These modules can be used to perform tasks such as handling HTTP requests, working with the file system, and more.
- Some commonly used core modules include:
  - http - for creating HTTP servers and handling requests
  - fs (file system) - for working with files and directories
  - path - for handling file and directory paths
  - os (operating system) - for interacting with the operating system
-http - launch a server, send requests
-https
-fs(file system)
-path
-os(operating system)


# Node.js Program Lifecycle
node app.js - start script to run the server -> Parse Code, Register Variables & Functions -> Event Loop(Keeps on running as long as there are event listeners registered) ->process.exit(); 

# Streams & Buffers
- Streams are used to handle large amounts of data efficiently by processing it in chunks.
- Buffers are used to store binary data in memory.
- Node.js provides built-in support for streams and buffers, allowing you to read and write data in a more efficient way.
# Single Thread, Event Loop & Blocking Code
- Node.js uses a single-threaded event loop to handle asynchronous operations.
- This allows Node.js to handle multiple requests concurrently without blocking the execution of other code.
- Node.js is a single JavaScript Thread 

# Module Summary
- How the web works
Client -> Request -> Server -> Response -> Client
- Program LifeCycle & Event loop
- Node.js is single threaded
-> Node.js is non-blocking
-> Node.js uses an event loop to handle asynchronous operations
-> Node.js can handle multiple requests concurrently
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
- Node.js provides a set of tools and features to improve the development workflow and debugging process.
- It allows you to use modern JavaScript features, such as async/await, which makes asynchronous code easier to read and write.
- Node.js has a built-in debugger that allows you to set breakpoints, inspect variables, and step through your code to identify and fix issues.
 -  Global Features vs Core Modules vs Third-Part Modules
 * Global features : Keywords like const or function but also some global object like process
 * Core Node.js Modules : Examples would be the file system module ("fs"), the path module("path") or the       Http module ("http")
 *  Third party modules : Installed via npm install - we can add any kind of feature

 Global features are always available , you don't need to import them into the files

# Types of Errors

- Syntax Errors
    These occur when the code is not written according to the syntax rules of the programming language. For example, missing parentheses or incorrect variable declarations can lead to syntax errors.
- Runtime Errors
    These errors occur while the program is running, often due to unexpected conditions such as trying to access a variable that is not defined or calling a function with the wrong number of arguments.
- Logical Errors
    These errors occur when the code runs without crashing, but produces incorrect results. They can be more challenging to identify and fix, as they often involve a misunderstanding of the program's logic or requirements.


# 4-Express.JS
# Express.js - A Node.js Framework
- Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
- It simplifies the process of building web servers and APIs by providing a set of tools and utilities.
# Setting up Express.js
- To use Express.js, you need to install it using npm (Node Package Manager).
- npm install --save express
- npm install --save body-parser - for parsing the URL

# Q - What is express.js ?
- Express.js is Node.js framework - a package that adds a bunch of utility functions and tools and a clear
set of rules how the app should be built (middleware!)
- Its highly extensible and other packages can be plugged into it (middleware!)

# Middleware, next() and res()
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.
- They can perform various tasks such as modifying the request or response objects, ending the request-response cycle, or calling the next middleware function in the stack.
- Middleware functions can be used for tasks like logging, authentication, error handling, and more.
- Express.js relies heavily on middleware functions -
  you can easily add them by calling use()
- Middleware functions handle a request and should call next() to forward the request to the next function
  in line or send a response  

# Q- Explain middleware in express.js - very important
- Middleware in Express.js is a function that has access to the request and response objects, as well as the next middleware function in the application's request-response cycle. It can modify the request or response objects, end the request-response cycle, or call the next middleware function.
- Middleware functions are used to perform tasks such as logging, authentication, error handling, and more
# Q Explain routing works in express.js - very important
- Routing in Express.js refers to the process of defining how an application responds to client requests for specific endpoints (URLs) and HTTP methods (GET, POST, PUT, DELETE, etc.).
- It allows you to map URLs to specific functions or handlers that will process the request and send a response back to the client.

# Q - what is res.send in express.js
- The res.send() method in Express.js is used to send a response back to the client. It can send various types of data, including strings, objects, arrays, and HTML content. It automatically sets the appropriate content-type header based on the data being sent.
res.send() in Express.js:

# Q - what is the use of middleware in node js
- Middleware in Node.js is used to process requests and responses in a web application. It allows you to add additional functionality to the request-response cycle, such as logging, authentication, error handling, and more.

# Q - what is app.use in express.js in node.js
- The app.use() function in Express.js adds middleware to the application's request-processing pipeline. It applies the specified middleware to all incoming requests or to specific routes, allowing you to modify request/response objects, perform operations, or handle errors throughout the application.
- syntax - app.use(path, callback)

# Q - How to filter path of routes in Express.js ?
- In Express.js, you can filter the path of routes by using route parameters or query parameters. Route parameters are defined in the route path using a colon (:) followed by the parameter name, while query parameters are appended to the URL after a question mark (?).
- Example of filtering routes using route parameters:
```javascript
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Fetch user by ID
});
- https://www.geeksforgeeks.org/node-js/how-to-filter-path-of-routes-in-express-js/

# Q- What is sendFile in express.js ?
- The res.sendFile() method in Express.js is used to send a file as a response to the client. It takes the file path as an argument and automatically sets the appropriate content-type header based on the file being sent.
- Example: 

# Core Module in node.js  - 'Path'
# Q - how to serve html pages in express.node.js ?
# Q - what is path.join(__dirname) in express.js ?
# Q - what is path.dirname(process.mainModule.filename); ?
# Q - how to serve files or css files statically in express.js ?


# Working with Dynamic Content & Adding Templating Engines 
 npm install --save ejs pug express-handlebars

# Q - What is Templating Engines in Node.js ?
- Templating engines in Node.js are libraries that allow you to generate dynamic HTML content by embedding JavaScript code within HTML templates. They provide a way to separate the presentation layer from the business logic, making it easier to create and maintain web applications.

# Q - What is EJS in Node.js ?
- EJS (Embedded JavaScript) is a templating engine for Node.js that allows you to generate HTML markup with plain JavaScript. It uses special tags to embed JavaScript code within HTML, making it easy to create dynamic content.
# Q - What is Pug in Node.js ?
- Pug (formerly known as Jade) is a high-performance templating engine for Node.js that uses whitespace-sensitive syntax to create HTML. It allows you to write cleaner and more concise templates by eliminating the need for closing tags and using indentation to define structure.
# Q - What is Handlebars in Node.js ?
- Handlebars is a popular templating engine for Node.js that extends Mustache syntax with additional features like helpers and partials. It allows you to create dynamic HTML templates with a clear separation of logic and presentation.
# Q - What is the difference between EJS and Pug in Node.js ?
- EJS vs Pug in Node.js:
   * EJS (Embedded JavaScript): Allows you to embed JavaScript code within HTML using special tags. It is easy to use and understand, making it a popular choice for simple templating needs.
   * Pug (formerly Jade): Uses whitespace-sensitive syntax to create HTML. It allows for cleaner and more concise templates by eliminating the need for closing tags and using indentation to define structure.
# Q - What is the difference between EJS and Handlebars in Node.js ?
- EJS vs Handlebars in Node.js:
   * EJS (Embedded JavaScript): Allows you to embed JavaScript code within HTML using special tags. It is easy to use and understand, making it a popular choice for simple templating needs.
   * Handlebars: Extends Mustache syntax with additional features like helpers and partials. It provides a clear separation of logic and presentation, making it suitable for more complex templating scenarios.
# Q - What is the difference between Pug and Handlebars in Node.js ?
- Pug vs Handlebars in Node.js:
   * Pug (formerly Jade): Uses whitespace-sensitive syntax to create HTML. It allows for cleaner and more concise templates by eliminating the need for closing tags and using indentation to define structure.
   * Handlebars: Extends Mustache syntax with additional features like helpers and partials. It provides a clear separation of logic and presentation, making it suitable for more complex templating scenarios.
# Q - What is the difference between EJS, Pug and Handlebars in Node.js ?
- EJS vs Pug vs Handlebars in Node.js:
   * EJS (Embedded JavaScript): Allows you to embed JavaScript code within HTML using special tags. It is easy to use and understand, making it a popular choice for simple templating needs.
   * Pug (formerly Jade): Uses whitespace-sensitive syntax to create HTML. It allows for cleaner and more concise templates by eliminating the need for closing tags and using indentation to define structure.
   * Handlebars: Extends Mustache syntax with additional features like helpers and partials. It provides a clear separation of logic and presentation, making it suitable for more complex templating scenarios.
# Q - How to use EJS in Node.js ?
- To use EJS in Node.js, you need to install the EJS package using npm and set it as the view engine in your Express application. You can then create EJS templates with embedded JavaScript code and render them in your routes.
# Q - How to use Pug in Node.js ?
- To use Pug in Node.js, you need to install the Pug package using npm and set it as the view engine in your Express application. You can then create Pug templates with whitespace-sensitive syntax and render them in your routes.
# Q - How to use Handlebars in Node.js ?
- To use Handlebars in Node.js, you need to install the Handlebars package using npm and set it as the view engine in your Express application. You can then create Handlebars templates with Mustache syntax and render them in your routes.
# Q - How to use Templating Engines in Node.js ?
- To use templating engines in Node.js, you need to install the desired templating engine package using npm, set it as the view engine in your Express application, and create templates using the engine's syntax. You can then render these templates in your routes.
# Q - How to render dynamic content in Node.js, Express.js ?
- To render dynamic content in Node.js and Express.js, you can use templating engines like EJS, Pug, or Handlebars. You create templates with placeholders for dynamic data and pass the data to the template when rendering it in your routes.
# Q - How to render dynamic content in EJS, Pug, Handlebars ?
- To render dynamic content in EJS, Pug, or Handlebars, you create templates with placeholders for dynamic data. When rendering the template in your routes, you pass the data as an object, and the templating engine replaces the placeholders with the actual data.
# Q - What is the difference between rendering and sending in Node.js ?
- Rendering in Node.js refers to the process of generating HTML content from templates using a templating engine, while sending refers to the process of sending the generated HTML or other data back to the client as a response. Rendering is typically done on the server side, while sending is part of the request-response cycle.
# Q - How to render HTML pages in Node.js, Express.js ?
- To render HTML pages in Node.js and Express.js, you can use a templating engine like EJS, Pug, or Handlebars. You set the view engine in your Express application, create templates with the desired HTML structure, and render them in your routes by passing data as needed.
# Q - How to app.set view engine in Express.js ?
- To set the view engine in Express.js, you use the app.set() method. You specify the 'view engine' and the name of the templating engine you want to use (e.g., 'ejs', 'pug', 'hbs' for Handlebars).
- Example:
```javascript
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
```
# Q - How to app.set views in Express.js ?
- To set the views directory in Express.js, you use the app.set() method with the 'views' key. This specifies the directory where your template files are located.
- Example:
```javascript
const express = require('express');
const app = express();
app.set('views', path.join(__dirname, 'views'));
```

# Model-View-Controller (MVC) Architecture
# Q - What is MVC Architecture in Node.js ?
- MVC (Model-View-Controller) is a software architectural pattern that separates an application into three main components:
  - Model: 1.Represents the data and business logic of the application.
    - It is responsible for managing the data, including retrieving, storing, and manipulating(saving, fetching) it.
    -Does'nt matter if you manage data in memory, in a database or in a file.
    -Contains data-related logic.
  - View: Represents the user interface and presentation layer.
     - What the user sees and interacts with.
     - Should not contain too much logic or business logic.
  - Controller: Acts as an intermediary between the Model and View, handling user input and updating the Model and View accordingly.
  - Connects Model and View
  - Should only make sure that the two can communicate( in both directions)
- In Node.js, MVC architecture helps organize code, making it more maintainable and scalable by separating concerns.    


# - 8. Dynamic Routes & Advanced Models
# Dynamic Routes
- Dynamic routes in Express.js allow you to create routes that can accept parameters, enabling you to handle requests for different resources dynamically.
- For example, you can create a route that accepts a user ID as a parameter and retrieves the corresponding user data from the database.
```javascript
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Retrieve user data from the database using userId
  res.send(`User ID: ${userId}`);
});
```
# Advanced Models
- Advanced models in Node.js can include features like validation, relationships between data entities, and complex queries.
- You can use libraries like Mongoose for MongoDB or Sequelize for SQL databases to define advanced models with features like schema validation, associations, and query building.
- These libraries provide an abstraction layer over the database, making it easier to work with complex data structures and relationships. 
# Q - What is dynamic routes in Node.js ?
- Dynamic routes in Node.js allow you to create routes that can accept parameters, enabling you to handle requests for different resources dynamically. This is useful for creating RESTful APIs where the route structure can change based on the data being accessed.
# Q - What is advanced models in Node.js ?
- Advanced models in Node.js can include features like validation, relationships between data entities, and complex queries.
- You can use libraries like Mongoose for MongoDB or Sequelize for SQL databases to define advanced models with features like schema validation, associations, and query building.
- These libraries provide an abstraction layer over the database, making it easier to work with complex data structures and relationships.  

# Q - How to create advanced models in Node.js ?
- To create advanced models in Node.js, you can use Object-Relational Mapping (ORM  ) libraries like Mongoose for MongoDB or Sequelize for SQL databases. These libraries allow you to define models with validation, relationships, and complex queries.
- Example using Mongoose:
```javascript
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 }
});

const User = mongoose.model('User', userSchema);
```
# Q - How to pass Route Params in Node.js ?
- In Node.js, you can pass route parameters by defining them in the route path using a colon (:) followed by the parameter name. You can then access these parameters using the req.params object in your route handler.
- Example:
```javascript
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Retrieve user data from the database using userId
  res.send(`User ID: ${userId}`);
});
```
# Q- How to use Query Params in Node.js ?
- In Node.js, you can use query parameters by appending them to the URL after a question mark (?). You can access these parameters using the req.query object in your route handler.
- Example:
```javascript
app.get('/users', (req, res) => {
  const { age, city } = req.query;
  // Retrieve user data from the database based on query parameters
  res.send(`Age: ${age}, City: ${city}`);
});
```
 
 # Connecting to Databases

 # command for mySql installation in node.js
- To connect to a MySQL database in Node.js, you can use the mysql2 package. First, install the package using npm:
```bash
npm install mysql2
```

- Node.js can connect to various databases, including MongoDB, MySQL, PostgreSQL, and more.
- You can use database drivers or Object-Relational Mapping (ORM) libraries to interact with databases in Node.js.
- For MongoDB, you can use the official MongoDB driver or Mongoose, which is an ODM (Object Data Modeling) library that provides a higher-level abstraction for working with MongoDB.

# Q - How to connect to a database in Node.js ?
- To connect to a database in Node.js, you can use database drivers or Object-Relational Mapping (ORM) libraries. For example, you can use the MongoDB driver for MongoDB or Sequelize for SQL databases.
- Example using MongoDB:
```javascript
const { MongoClient } = require('mongodb');

async function connectToDatabase() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  console.log('Connected to MongoDB');
  return client;
}