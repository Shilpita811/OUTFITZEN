const User = require ('../models/usermodel');

exports.registerUser = async(req,res,next) =>{
    const {name,email,phone,password} = req.body;

    const user = await User.create({
        name,email,phone,password
    })

    res.status(201).json({
        success:true,
        user
    })
}