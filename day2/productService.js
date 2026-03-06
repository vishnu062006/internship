// One function = one task (separation of concerns)
const { products, getNextId } = require('./data');

function addProduct(name, price) {
    const product = { id: getNextId(), name, price };
    products.push(product);
    return product;
}

function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function updateProduct(id, name, price) {
    const product = getProductById(id);
    if (!product) return null;
    product.name = name;
    product.price = price;
    return product;
}

function deleteProduct(id) {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return false;
    products.splice(index, 1);
    return true;
}

module.exports = { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct };