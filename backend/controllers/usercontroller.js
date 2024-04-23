const User = require ('../models/usermodel');
//registration
const Contact = require ('../models/contactModel');
const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHander = require('../utils/errorhandler');

exports.registerUser = catchAsyncError(async(req,res,next) =>{
    const {name,email,phone,password} = req.body;

    const user = await User.create({
        name,email,phone,password
    })

    res.status(201).json({
        success:true,
        user
    })
})
//login

exports.loginUser = catchAsyncError(async(req,res,next) =>{
    const {email,password} = req.body;
    if(!email || !password){
        return next(new ErrorHander("Please Enter Email and Password",400));
    }
    const user = await User.findOne({
        email
    }).select("+password")

    if(!user){
        return next(new ErrorHander("Invalid Email or Password",401));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid Email or Password",401));
    }
    res.status(200).json({
        success:true,
        user
    });
    //contactus
    
    exports.contactUs=catchAsyncError(async (req, res, next) => {
        const{name,email,phone,subject,message}=req.body;
        const contact=await Contact.create({
            name,email,phone,subject,message
        });
        res.status(201).json({
            success: true,
            contact,
        })
    })


});