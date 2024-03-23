const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "..", "data", "products.json");

const getProductsFromFile = (cb) => {
    
    fs.readFile(p, (err, data) => {
      if (err) {
        cb([]);
      }
      else{
        cb(JSON.parse(data));
      }
    });
}

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  onSave() {

    getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
    })

    
  }

  static fetchAllProducts(cb) {
  getProductsFromFile(cb);
  }
};
