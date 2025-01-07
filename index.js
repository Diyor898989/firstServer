const express = require('express');
const app = express();
const port = 4001;

// Middleware for parsing JSON
app.use(express.json());

// Mock data
let users = [
    { id: 1, name: 'Ali', age: 25 },
    { id: 2, name: 'Vali', age: 30 }
];

// GET /users - Get list of users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST /users - Add a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});