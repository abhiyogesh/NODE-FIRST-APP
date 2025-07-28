const path = require('path'); // Import the path module to handle file paths
const express = require('express'); // Import the Express framework
const rootDir = require('../util/path'); // Import the root directory path
const router  = express.Router(); // Create a new router instance
 
 router.get('/', (req,res, next)=>{ // Middleware to parse URL-encoded bodies
   res.sendFile(path.join(rootDir, 'views', 'shop.html')); // Send the shop.html file as a response
});

module.exports = router; // Export the router to be used in app.js
// This allows the router to handle requests for the root path defined in this file