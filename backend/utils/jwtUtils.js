const jwt = require('jsonwebtoken');

// Define your secret key securely (preferably use environment variables)
const JWT_SECRET = 'your_jwt_secret_key';

// Function to generate a JWT token
const generateToken = (userId) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { generateToken };
