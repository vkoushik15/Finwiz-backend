const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getnumberofusers } = require('../controllers/usercontroller');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/nu', getnumberofusers);
module.exports = router;    
