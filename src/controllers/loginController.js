const User = require('../models/User')
const bcrypt= require ('bcrypt');
const jwt= require('jsonwebtoken');

const login= async (req, res) => {
    const { email, password } = req.body;

    try{
        const user= await User.findOne({ email });
        if(!user){
            return res.status(400).send('Invalid username or password!');
        }

        const validPassword= bcrypt.compare(password, user.password);

        if(!validPassword){
            return res.status(400).send('Invalid username or password!');
        }

        const token= jwt.sign({_id: user.id}, process.env.JWT_SECRET);

        res.send({ token });
    } catch(err){
        res.status(500).send('Server error');
    }
}

module.exports= login;