const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const shopProducts = require('../controllers/products.js');
const router = express.Router();

router.get('/', shopProducts.shopProducts);

module.exports = router;
