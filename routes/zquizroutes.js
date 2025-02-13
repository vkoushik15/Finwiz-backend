const express = require('express');
const router = express.Router();
const { createZquiz, getZquiz, getnumberofusers } = require('../controllers/zquizcontroller');
const Zquiz = require('../models/zquizmodel');

router.post('/create', createZquiz);
router.get('/get', getZquiz);
router.get('/nu', getnumberofusers);
// Add check registration route
router.get('/check/:username', async (req, res) => {
    try {
        const user = await Zquiz.findOne({ name: req.params.username });
        res.json({ isRegistered: !!user });
    } catch (error) {
        res.status(500).json({ message: 'Error checking registration' });
    }
});

module.exports = router;
