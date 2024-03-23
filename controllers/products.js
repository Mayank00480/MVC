//const products = [];
const Products = require('..//model/product.js');
exports.shopProducts = (req, res, next) => {
  
     Products.fetchAllProducts((products) => {
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
     } );
    
  }


  exports.admingetProducts = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }


exports.adminPostProduct = (req, res, next) => {
     const products = new Products(req.body.title);
     products.onSave(products);
//    products.push({ title: req.body.title });
    res.redirect('/');
  }
