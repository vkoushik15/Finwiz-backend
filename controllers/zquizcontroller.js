const Zquiz = require('../models/zquizmodel');

const createZquiz = async (req, res) => {
    const { name } = req.body;
    const user = await Zquiz.create({ name });
    res.status(201).json(user);
}
const getZquiz = async (req, res) => {
    try {
        const user = await Zquiz.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error getting Zquiz' });
    }
}
const getnumberofusers = async (req, res) => {
    const users = await Zquiz.find();
    res.status(200).json({ numberOfUsers: users.length });
}
module.exports = { createZquiz, getZquiz, getnumberofusers };

