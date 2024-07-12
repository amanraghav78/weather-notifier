const User= require('../models/User');
const bcrypt= require('bcrypt');

const signUp = async (req, res)=> {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).send('Missing username or password');
    }

    try {
        const existingUser= await User.findOne({ email });

        if(existingUser){
            return res.status(409).send('User already exists');
        }

        const hashedPassword= await bcrypt.hash(password, 10);

        

        const newUser= new User({
            username: req.body.username,
            email,
            password: hashedPassword
        })

        console.log('reached here');

        const savedUser= await newUser.save();

        res.status(200).send(savedUser);
    } catch (error) {
        res.status(500).send('Interal error');
    }
}

module.exports= signUp;