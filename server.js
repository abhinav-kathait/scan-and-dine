const express = require('express');
const cors = require('cors');
const db = require('./database');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Built-in body-parser

// Serve Static Files (Frontend)
// Assuming HTML files are in 'SCAN AND DINE' subdirectory
app.use(express.static(path.join(__dirname, 'SCAN AND DINE')));

// --- Routes ---

// Get All Orders
app.get('/api/orders', (req, res) => {
    const orders = db.getAllOrders();
    res.json(orders);
});

// Create New Order
app.post('/api/orders', (req, res) => {
    const newOrder = req.body;
    
    if (db.addOrder(newOrder)) {
        res.status(201).json({ message: 'Order created', order: newOrder });
    } else {
        res.status(500).json({ error: 'Failed to save order' });
    }
});

// Clear Database (Admin only)
app.post('/api/clear', (req, res) => {
    if (db.clearOrders()) {
        res.json({ message: 'Database cleared' });
    } else {
        res.status(500).json({ error: 'Failed to clear database' });
    }
});

// Fallback for SPA (if needed, but simple static serve is enough for now)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'SCAN AND DINE', 'login.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`- Frontend: http://localhost:${PORT}/login.html`);
    console.log(`- API: http://localhost:${PORT}/api/orders`);
});
