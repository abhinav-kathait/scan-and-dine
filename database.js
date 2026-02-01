const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'orders.json');

// Ensure DB file exists
function init() {
    if (!fs.existsSync(DB_FILE)) {
        fs.writeFileSync(DB_FILE, '[]', 'utf8');
    }
}

// Get all orders
function getAllOrders() {
    init();
    try {
        const data = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading database:", err);
        return [];
    }
}

// Add a new order
function addOrder(order) {
    const orders = getAllOrders();
    orders.unshift(order); // Add to top
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(orders, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error("Error saving order:", err);
        return false;
    }
}

// Clear all orders
function clearOrders() {
    try {
        fs.writeFileSync(DB_FILE, '[]', 'utf8');
        return true;
    } catch (err) {
        console.error("Error clearing database:", err);
        return false;
    }
}

module.exports = {
    getAllOrders,
    addOrder,
    clearOrders
};
