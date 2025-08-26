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


# 4-Express.JS & Routing
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
```
# 10 - SEQUELIZE
  Sequelize is a promise-based Node.js ORM that supports various SQL dialects. It provides an easy-to-use API for defining models, associations, and querying the database.

# Q - What are the main features of Sequelize?
- Sequelize offers a range of features, including:
  - Model definition and validation
  - Associations (one-to-one, one-to-many, many-to-many)
  - Querying with a fluent API
  - Transactions
  - Migrations
# Q - How to define models in Sequelize?
- To define models in Sequelize, you can use the `sequelize.define` method, passing the model name and its attributes as an object.
- Example:
```javascript
const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
```
# Q - How to create associations in Sequelize?
- To create associations in Sequelize, you can use the `belongsTo`, `hasMany`, and `belongsToMany` methods on your models.
- Example:
```javascript
const User = sequelize.define('user', { /* attributes */ });
const Product = sequelize.define('product', { /* attributes */ });
const Cart = sequelize.define('cart', { /* attributes */ });

User.hasMany(Product);
Product.belongsTo(User);
User.hasOne(Cart);
Cart.belongsTo(User);
```

# Q - How to query data in Sequelize?
- To query data in Sequelize, you can use the `findAll`, `findByPk`, and other query methods provided by the model.
- Example:
```javascript
Product.findAll()
  .then(products => {
    console.log(products);
  })
  .catch(err => {
    console.log(err);
  });
  ```
  # Q - How to update data in Sequelize?
- To update data in Sequelize, you can use the `update` method on the model.
- Example:
```javascript
Product.update({ price: 19.99 }, { where: { id: 1 } })
  .then(() => {
    console.log('Product updated');
  })
  .catch(err => {
    console.log(err);
  });
  ```
  # Q - How to delete data in Sequelize?
- To delete data in Sequelize, you can use the `destroy` method on the model.
- Example:
```javascript
Product.destroy({ where: { id: 1 } })
  .then(() => {
    console.log('Product deleted');
  })
  .catch(err => {
    console.log(err);
  });
  ```
  # Q - How to handle transactions in Sequelize?
- To handle transactions in Sequelize, you can use the `transaction` method provided by the Sequelize instance.
- Example:
```javascript
const sequelize = require('./database');

async function performTransaction() {
  const t = await sequelize.transaction();

  try {
    const user = await User.create({ name: 'John Doe' }, { transaction: t });
    const product = await Product.create({ title: 'New Product', userId: user.id }, { transaction: t });
    await t.commit();
  } catch (error) {
    await t.rollback();
    console.error('Transaction failed:', error);
  }
}
```
# Q - How to use migrations in Sequelize?
- To use migrations in Sequelize, you can use the Sequelize CLI to generate and run migration files.
- Example:
```bash
npx sequelize-cli migration:generate --name create-users-table
npx sequelize-cli db:migrate
```  

#  11 - MongoDB ---------
https://cloud.mongodb.com/v2/68a28af0d4e5190c5d0e57a5#/overview
https://www.mongodb.com/docs/manual/tutorial/insert-documents/
login via yogeshsharrma356@gmail.com
Do the configuration
 - install mongodb from browser via official website and download cloud database via atlas

# - npm install mongodb

 # download the mongoDB compass for GUI

## Q - What is MongoDB?
- MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is designed for scalability and performance.

## Q - How to connect to MongoDB?
- To connect to MongoDB, you can use the official MongoDB Node.js driver.
- Example:
```javascript
const { MongoClient } = require('mongodb');

async function connectToDatabase() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  console.log('Connected to MongoDB');
  return client;
}
```

# Q - How to insert data in mongoDB?
- Use commands like insertOne
# Q - how to fetch record in mongoDB?
- Use commands like find()

# Use commands like updateOne(), deleteOne()

# All operations are


# ----- 12-mongoose------
 npm install --save mongoose
 https://mongoosejs.com/docs/guides.html

 Check all the inbuilt method
 - check models(products, user, order) to check how to create schema's in mongooose
 - check all the controllers to check all inbuilt mongoose methods

# ------ 13 - Sessions & Cookies
Cookies - are in frontend side
Sessions - are in backend side

for backend session :
npm install --save express-session
-app.use(session({secret : 'my secret', resave : false, saveUninitialized : false}));

for mongoDB-session
install npm install --save connect-mongodb-session

const MONGODB_URI =
  'mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/shop';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});


# 14 ---------------------- Authenication --------------------------------
- To encrypt the password ---
- npm install --save bcryptjs

# Q - How to hash a password in Node.js?
- To hash a password in Node.js, you can use the bcryptjs library.
- Example:
```javascript
const bcrypt = require('bcryptjs');

bcrypt.hash('myPassword', 12)
  .then((hashedPassword) => {
    console.log(hashedPassword);
  })
  .catch((err) => {
    console.log(err);
  });

# Q - How to compare a password in Node.js?
- To compare a password in Node.js, you can use the bcryptjs library.
- Example:
```javascript
const bcrypt = require('bcryptjs');

const hashedPassword = '$2a$12$KIX/1Q1Q1Q1Q1Q1Q1Q1Q1u';
const password = 'myPassword';

bcrypt.compare(password, hashedPassword)
  .then((isMatch) => {
    console.log(isMatch); // true
  })
  .catch((err) => {
    console.log(err);
  });
  ```

  # Q - How to authenicate route parameters
  - To authenticate route parameters in Express.js, you can use middleware to check if the user is authenticated before allowing access to the route.
  - Example:
```javascript
const isAuth = require('../middleware/is-auth');

app.get('/user/:userId', isAuth, (req, res) => {
  // Handle the request
});
```

# Q - What is CSRF?
- CSRF (Cross-Site Request Forgery) is a type of attack that tricks the user into submitting a malicious request. It can be mitigated by using anti-CSRF tokens.
# Q - What is CSRF Token?
- A CSRF token is a unique, secret, and unpredictable value that is generated by the server and sent to the client. The client must include this token in subsequent requests to verify their authenticity.

# Q - How to implement CSRF protection in Express.js?
- install csurf - npm install --save csurf
- To implement CSRF protection in Express.js, you can use the csurf middleware.
- Example:
```javascript
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);

app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});
```


# Q - What is the alternative of csurf?
(https://www.npmjs.com/search?q=express%20csrf)

https://www.npmjs.com/package/csrf-csrf.
- An alternative to csurf is to use SameSite cookies, which provide a level of CSRF protection by restricting how cookies are sent with cross-site requests.

# Q - What is the csrf-csrf package?
- The csrf-csrf package is an alternative CSRF protection middleware for Express.js applications.

# Q - How to use csrf-csrf in Express.js?
- To use csrf-csrf in Express.js, you can install it via npm and use it as middleware.

# Q - What is connect-flash?
- connect-flash is a middleware for Express.js that allows you to store and retrieve flash messages (temporary messages) in the session.
- install - npm install --save connect-flash


# ---- 15--- How Sending Emails works ? -----
- npm install --save nodemailer
- npm install --save nodemailer-sendgrid-transport


# ---- 16 --- Authentication  - Resetting and Updating Passwords -----
- To implement password reset functionality, you can follow these steps:
1. Create a form for the user to enter their email address.
2. Generate a unique token and store it in the database along with the user's email.
3. Send an email to the user with a link to reset their password, including the token as a query parameter.
4. Create a route to handle the password reset request, verifying the token and allowing the user to enter a new password.
5. Update the user's password in the database and delete the token.

# ---- Authentication - Updating User Information -----
- To implement user information updating functionality, you can follow these steps:
1. Create a form for the user to enter their new information (e.g., email, password).
2. Validate the new information on the server.
3. Update the user's information in the database.
4. Send a confirmation email to the user.



# ---- 17 ----- Validations ------

 https://express-validator.github.io/docs

 https://github.com/chriso/validator.js

 npm install --save express-validator
- To implement validations in your application, you can follow these steps:
1. Use a validation library (e.g., express-validator) to define validation rules for your forms.
2. Apply the validation middleware to your routes.
3. Handle validation errors in your route handlers.

# Q - How to handle validation errors in Express.js?
- To handle validation errors in Express.js, you can use the `validationResult` function from `express-validator` to check for errors and return them in the response.
- Example:
```javascript
const { validationResult } = require('express-validator');

app.post('/signup', (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  // Continue with signup process
});
```

# Q  - How to add async validation in Express.js?
- To add async validation in Express.js, you can use the `custom` validator from `express-validator` and return a promise.
- Example:
```javascript
const { check, body } = require('express-validator');

app.post('/signup', [
  body('email').custom((value) => {
    return User.findOne({ email: value }).then(user => {
      if (user) {
        return Promise.reject('E-Mail exists already, please pick a different one.');
      }
    });
  })
]);
``` 
# ------ 18--Error-Handling--------

# Q - How to handle errors in Express.js?
- To handle errors in Express.js, you can use middleware functions that have four arguments (error, req, res, next). These functions can catch errors and send appropriate responses.

# Q - How many types of errors are there in Express.js?
- In Express.js, there are two main types of errors: synchronous errors and asynchronous errors.

# Q - What is the difference between synchronous and asynchronous errors in Express.js?
- Synchronous errors occur during the request handling process and can be caught using try-catch blocks.
- Asynchronous errors occur in callbacks or promises and need to be passed to the next middleware using the next() function.

# Q - How to handle synchronous errors in Express.js?
- To handle synchronous errors in Express.js, you can use try-catch blocks within your route handlers.

# Q - How to handle asynchronous errors in Express.js?
- To handle asynchronous errors in Express.js, you can use the next() function to pass the error to the error handling middleware., then & catch you can use then and catch blocks.

# Q - How many types of errors are there in Node.js?
- In Node.js, there are two main types of errors: system errors and application errors.

# Q - What is the difference between system errors and application errors in Node.js?
- System errors are errors that occur due to issues with the underlying system, such as file system errors or network errors.
- Application errors are errors that occur within the application logic, such as validation errors or business logic errors.

# Q - How many types of status codes are there in HTTP?
- In HTTP, there are five main types of status codes: informational, success, redirection, client error, and server error.

# Q - What is the purpose of HTTP status codes?
- HTTP status codes are issued by a server in response to a client's request made to the server. They represent the outcome of the server's attempt to process the request.

# Q - What are the most common HTTP status codes?
- The most common HTTP status codes include:
  - 200 OK: The request was successful.
  - 404 Not Found: The requested resource was not found.
  - 500 Internal Server Error: An error occurred on the server.

 # Q - List all the HTTP status codes
- 1xx Informational
- 2xx Success
- 3xx Redirection
- 4xx Client Error
- 5xx Server Error

# Q - List all the errors  and their http response codes
- 400 Bad Request: The server could not understand the request due to invalid syntax.
- 401 Unauthorized: The client must authenticate itself to get the requested response.
- 403 Forbidden: The client does not have access rights to the content.
- 404 Not Found: The server can not find the requested resource.
- 500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.
- 200 OK: The request has succeeded.
- 201 Created: The request has been fulfilled and a new resource has been created.
- 304 Not Modified: The resource has not been modified since the last request.


# Q -list all the errors in express.js
- Syntax Errors
- Validation Errors
- Authentication Errors
- Authorization Errors
- Not Found Errors
- Internal Server Errors

# Q - how many types of errors & Handling errors ?
- Technical Errors(these are thrown)
- Expected Errors(invalid user input)

# --- Handling Errors -----
- Using custom if-checks
- Using try-catch blocks
- Using then and catch blocks
- Using error-handling middleware