const path = require('path'); // Import the path module to handle file paths
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin'); // Import the admin routes
const shopRoutes = require('./routes/shop'); // Import the shop routes
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// app.use('/', (req, res, next) => { // Middleware to parse URL-encoded bodies
//     next();  // Call next() to pass control to the next middleware function
// });

// Now move to under routes folder into admin.js
// app.use('/add-product', (req,res, next)=>{ // Middleware to parse URL-encoded bodies
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); // Send a response to the client
// }); 
// app.post('/product', (req,res, next)=>{ // Middleware to parse URL-encoded bodies
//     console.log(req.body); // Log the request body
//     res.redirect('/'); // Redirect to the root path
// });

// move to shop.js
// app.use('/', (req,res, next)=>{ // Middleware to parse URL-encoded bodies
//     res.send('<h1>Hello from Express!</h1>'); // Send a response to the client
// }); 
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html')); // Send a 404 error page
    // This will be served for any route that is not handled by the above routes
})


app.listen(3000); // Start the server and listen on port 3000