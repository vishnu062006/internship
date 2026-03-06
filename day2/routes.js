const express = require('express');
const router = express.Router();
const service = require('./productService');

// CREATE
router.post('/products', (req, res) => {
    const { name, price } = req.body;
    const product = service.addProduct(name, price);
    res.json(product);
});

// READ ALL
router.get('/products', (req, res) => {
    res.json(service.getAllProducts());
});

// READ ONE
router.get('/products/:id', (req, res) => {
    const product = service.getProductById(parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

// UPDATE
router.put('/products/:id', (req, res) => {
    const { name, price } = req.body;
    const product = service.updateProduct(parseInt(req.params.id), name, price);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

// DELETE
router.delete('/products/:id', (req, res) => {
    const deleted = service.deleteProduct(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted' });
});

module.exports = router;