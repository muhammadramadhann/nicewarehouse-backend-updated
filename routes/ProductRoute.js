const express = require('express');
const {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/ProductController');

const router = express.Router();

router.get('/', getProducts);
router.get('/:uuid', getProductById);
router.post('/', saveProduct);
router.put('/:uuid', updateProduct);
router.delete('/:uuid', deleteProduct);

module.exports = router;