const fs = require("fs");
const path = require("path");

 const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );

const getProductsFromFile = (cb) =>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    //products.push(this);
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
// This code defines a Product model that can save products to a JSON file and fetch all products from that file.
// It uses the Node.js 'fs' module to read and write files, and the 'path' module to handle file paths.
// The products are stored in a file named 'products.json' located in a 'data' directory relative to the main module's filename.
// The `getProductsFromFile` function reads the products from the file and parses them into an array.
