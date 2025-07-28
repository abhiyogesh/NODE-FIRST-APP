const path = require('path'); // Import the path module to handle file paths
module.exports = path.dirname(process.mainModule.filename); // Export the path module to be used in other files
// This allows the path module to be used for handling file paths in the application
