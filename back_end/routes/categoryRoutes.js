const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/productController');

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.createCategoryt);

module.exports = router;