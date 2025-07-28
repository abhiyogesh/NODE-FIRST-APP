const path = require ('path');
const express = require('express');
const rootDir = require('../util/path'); // Import the root directory path
const router  = express.Router(); // Create a new router instance



router.get('/add-product', (req,res,next)=>{
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); // Send a response to the client
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req,res,next)=>{
    console.log(req.body); // Log the request body
    res.redirect('/'); // Redirect to the root path
});




module.exports = router; // Export the router to be used in app.js
// This allows the router to handle requests for the admin routes defined in this file