const express = require('express');
const router = express.Router();
const { createCA, getCA, getnumberofusers } = require('../controllers/cacontroller');
const Ca = require('../models/camodel');

router.post('/create', createCA);
router.get('/get', getCA);
router.get('/nu', getnumberofusers);
// Add check registration route
router.get('/check/:username', async (req, res) => {
    try {
        const user = await Ca.findOne({ name: req.params.username });
        res.json({ isRegistered: !!user });
    } catch (error) {
        res.status(500).json({ message: 'Error checking registration' });
    }
});

module.exports = router;
