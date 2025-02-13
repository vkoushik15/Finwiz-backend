const User = require('../models/usermodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = 'your-secret-key';

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({ 
            name, 
            email, 
            password: hashedPassword 
        });

        // Generate token
        const token = jwt.sign(
            { 
                userId: user._id, 
                email: user.email,
                name: user.name,
                isadmin: user.isadmin // lowercase to match the model
            },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isadmin: user.isadmin // lowercase to match the model
            }
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
}

const loginUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign(
            { 
                userId: user._id, 
                email: user.email,
                name: user.name,
                isadmin: user.isadmin // lowercase to match the model
            },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                isadmin: user.isadmin // lowercase to match the model
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
}
const getnumberofusers = async (req, res) => {
    const users = await User.find();
   
    res.status(200).json({ numberOfUsers: users.length });
}

module.exports = { registerUser, loginUser, getnumberofusers };

