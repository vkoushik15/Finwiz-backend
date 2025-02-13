const express = require('express');
const router = express.Router();
const {createWtr,getWtr,getnumberofusers} = require('../controllers/wtrcontroller');
const Wtr = require('../models/wtrmodel');

router.post('/createwtr',createWtr);
router.get('/getwtr',getWtr);
router.get('/nu', getnumberofusers);

// Add check registration route
router.get('/check/:username', async (req, res) => {
    try {
        const user = await Wtr.findOne({ name: req.params.username });
        res.json({ isRegistered: !!user });
    } catch (error) {
        res.status(500).json({ message: 'Error checking registration' });
    }
});

module.exports = router;
