const express = require('express');
const router = express.Router();
const service = require('./productService');

/**
 * POST /api/products
 * Creates a new product
 */
router.post('/products', (req, res) => {
    try {
        console.log('[INFO] POST /api/products called');
        const { name, price } = req.body;
        const product = service.addProduct(name, price);
        res.status(201).json(product);
    } catch (e) {
        console.error(`[ERROR] POST /api/products failed: ${e.message}`);
        res.status(400).json({ error: e.message });
    } finally {
        console.log('[INFO] POST /api/products complete');
    }
});

/**
 * GET /api/products
 * Returns all products
 */
router.get('/products', (req, res) => {
    try {
        console.log('[INFO] GET /api/products called');
        const products = service.getAllProducts();
        res.json(products);
    } catch (e) {
        console.error(`[ERROR] GET /api/products failed: ${e.message}`);
        res.status(500).json({ error: e.message });
    } finally {
        console.log('[INFO] GET /api/products complete');
    }
});

/**
 * GET /api/products/:id
 * Returns a single product by ID
 */
router.get('/products/:id', (req, res) => {
    try {
        console.log(`[INFO] GET /api/products/${req.params.id} called`);
        const product = service.getProductById(parseInt(req.params.id));
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (e) {
        console.error(`[ERROR] GET /api/products/:id failed: ${e.message}`);
        res.status(500).json({ error: e.message });
    } finally {
        console.log('[INFO] GET /api/products/:id complete');
    }
});

/**
 * PUT /api/products/:id
 * Updates an existing product
 */
router.put('/products/:id', (req, res) => {
    try {
        console.log(`[INFO] PUT /api/products/${req.params.id} called`);
        const { name, price } = req.body;
        const product = service.updateProduct(parseInt(req.params.id), name, price);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (e) {
        console.error(`[ERROR] PUT /api/products/:id failed: ${e.message}`);
        res.status(400).json({ error: e.message });
    } finally {
        console.log('[INFO] PUT /api/products/:id complete');
    }
});

/**
 * DELETE /api/products/:id
 * Deletes a product by ID
 */
router.delete('/products/:id', (req, res) => {
    try {
        console.log(`[INFO] DELETE /api/products/${req.params.id} called`);
        const deleted = service.deleteProduct(parseInt(req.params.id));
        if (!deleted) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (e) {
        console.error(`[ERROR] DELETE /api/products/:id failed: ${e.message}`);
        res.status(500).json({ error: e.message });
    } finally {
        console.log('[INFO] DELETE /api/products/:id complete');
    }
});

module.exports = router;