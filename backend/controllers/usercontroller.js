const User = require ('../models/usermodel');
//registration

exports.registerUser = async(req,res,next) =>{
    const {name,email,phone,password} = req.body;

    const user = await User.create({
        name,email,phone,password
    })

    res.status(201).json({
        success:true,
        user
    })
    console.log("hi")
}
//login

exports.loginUser = async(req,res,next) =>{
    const {email,password} = req.body;
    if(!email || !password)
    {
        res.status(400).json({
            success:false,
            message:"Please enter email and password"
        })
    }
    const user = await User.findOne({
        email
    }).select("+password")
    if(!user)
    {
        res.status(400).json({
            success:false,
            message:"Invalid email and password"
        })
    }
    const passwordmatch =await user.comparePassword(password)
    if(!passwordmatch){
        res.status(400).json({
            success:false,
            message:"invalid email and password"
        })
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


}