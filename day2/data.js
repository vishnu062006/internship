// In-memory database — just an array
let products = [];
let nextId = 1;

module.exports = { products, getNextId: () => nextId++ };