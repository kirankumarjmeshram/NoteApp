const User = require('../models/User');
const {generateToken} = require('../utils/jwtUtils');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    const {username, email, password} = req.body;
    console.log(username, email, password)
    try {
        const user = new User({username, email, password});
        await user.save();
        res.status(201).json({message:'User Registered Successfully'});
    } catch (error) {
        res.status(400).json({message: 'Error registering user', error: error.message});
        console.log(error.message)
    };
};

exports.loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({message: 'Invalid email or password'});
        }
        const token = generateToken(user._id);
        res.json({token});
    }catch(error){
        res.status(400).json({error: error.message});
    }
}