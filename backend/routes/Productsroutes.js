const express = require('express');
const { createProduct, getallproducts, getallproductsadmin } = require('../controllers/productController');
const router = express.Router()
router.route('/admin/product/new').post(createProduct);
router.route('/products').get(getallproducts);
router.route('/admin/products').get(getallproductsadmin);

module.exports = router;