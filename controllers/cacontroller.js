const Ca = require('../models/camodel');

const createCA = async (req, res) => {
    try {
        const { name, teamDetails } = req.body;

        // Check if user already registered
        const existingRegistration = await Ca.findOne({ name });
        if (existingRegistration) {
            return res.status(400).json({ message: 'You have already registered for this event' });
        }

        // Create new registration
        const newRegistration = await Ca.create({
            name,
            teamDetails
        });

        res.status(201).json({
            message: 'Registration successful',
            registration: newRegistration
        });
    } catch (error) {
        console.error('CA Registration error:', error);
        res.status(500).json({ message: 'Error during registration' });
    }
};

const getCA = async (req, res) => {
    try {
        const registrations = await Ca.find();
        res.status(200).json(registrations);
    } catch (error) {
        console.error('Error fetching CA registrations:', error);
        res.status(500).json({ message: 'Error fetching registrations' });
    }
};
const getnumberofusers = async (req, res) => {
    try {
        const users = await Ca.find();
        res.status(200).json({ numberOfUsers: users.length });
    } catch (error) {
        console.error('Error fetching CA registrations:', error);
        res.status(500).json({ message: 'Error fetching registrations' });
    }
    
}
module.exports = { createCA, getCA, getnumberofusers };

