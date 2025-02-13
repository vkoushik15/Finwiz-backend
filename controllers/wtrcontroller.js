const Wtr = require('../models/wtrmodel');

const createWtr = async(req,res)=>{
    const {name} = req.body;
    try {
        const wtr = await Wtr.create({name});
        res.status(201).json(wtr);
    } catch (error) {
        res.status(500).json({message:"Error creating WTR"});
    }
}
const getWtr = async(req,res)=>{
   
    try {
        const wtr = await Wtr.find({});
        res.status(200).json(wtr);
    } catch (error) {
        res.status(500).json({message:"Error getting WTR"});
    }
}
const getnumberofusers = async (req, res) => {
    const users = await Wtr.find();
    res.status(200).json({ numberOfUsers: users.length });
}


module.exports = {createWtr,getWtr,getnumberofusers};
