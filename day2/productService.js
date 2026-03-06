const { products, getNextId } = require('./data');

/**
 * ProductService - Handles all product-related business logic
 * Demonstrates OOP, validation, error handling and logging
 */
class ProductService {

    /**
     * Validates product input before any operation
     * @param {string} name - Product name
     * @param {number} price - Product price
     */
    #validate(name, price) {
        if (!name || name.trim() === '') {
            throw new Error('Product name cannot be empty');
        }
        if (price === undefined || price < 0) {
            throw new Error('Price must be a positive number');
        }
    }

    /**
     * Creates and adds a new product
     * @param {string} name - Product name
     * @param {number} price - Product price
     * @returns {object} - Created product
     */
    addProduct(name, price) {
        try {
            console.log(`[INFO] Attempting to add product: ${name}, price: ${price}`);
            this.#validate(name, price);
            const product = { id: getNextId(), name, price };
            products.push(product);
            console.log(`[INFO] Product added successfully with ID: ${product.id}`);
            return product;
        } catch (e) {
            console.error(`[ERROR] Failed to add product: ${e.message}`);
            throw e;
        } finally {
            console.log(`[INFO] addProduct operation complete`);
        }
    }

    /**
     * Returns all products
     * @returns {Array} - List of all products
     */
    getAllProducts() {
        console.log(`[INFO] Fetching all products, count: ${products.length}`);
        return products;
    }

    /**
     * Finds a product by ID
     * @param {number} id - Product ID
     * @returns {object|undefined} - Found product or undefined
     */
    getProductById(id) {
        console.log(`[INFO] Looking up product with ID: ${id}`);
        const product = products.find(p => p.id === id);
        if (!product) {
            console.warn(`[WARN] Product with ID ${id} not found`);
        }
        return product;
    }

    /**
     * Updates an existing product
     * @param {number} id - Product ID
     * @param {string} name - New name
     * @param {number} price - New price
     * @returns {object|null} - Updated product or null
     */
    updateProduct(id, name, price) {
        try {
            console.log(`[INFO] Attempting to update product ID: ${id}`);
            this.#validate(name, price);
            const product = this.getProductById(id);
            if (!product) return null;
            product.name = name;
            product.price = price;
            console.log(`[INFO] Product ID ${id} updated successfully`);
            return product;
        } catch (e) {
            console.error(`[ERROR] Failed to update product: ${e.message}`);
            throw e;
        } finally {
            console.log(`[INFO] updateProduct operation complete`);
        }
    }

    /**
     * Deletes a product by ID
     * @param {number} id - Product ID
     * @returns {boolean} - true if deleted, false if not found
     */
    deleteProduct(id) {
        try {
            console.log(`[INFO] Attempting to delete product ID: ${id}`);
            const index = products.findIndex(p => p.id === id);
            if (index === -1) {
                console.warn(`[WARN] Cannot delete — product ID ${id} not found`);
                return false;
            }
            products.splice(index, 1);
            console.log(`[INFO] Product ID ${id} deleted successfully`);
            return true;
        } catch (e) {
            console.error(`[ERROR] Failed to delete product: ${e.message}`);
            throw e;
        } finally {
            console.log(`[INFO] deleteProduct operation complete`);
        }
    }
}

module.exports = new ProductService();