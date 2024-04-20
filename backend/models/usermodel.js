const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'plese Enter your name'],
        maxLength:[30,"Max Length is 30 charcters"],
        minLength:[5,"Min Length should be 5 charecters"],
    },
    
    email:{
        type:String,
        unique:true,

    },
    phone:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
       
    },
    role:{
        type:String,
        default:"user",
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})
//password hashing
userSchema.pre("save",async function(next){
    if(!this.isModified("password"))
    {
        next()
    }
    this.password=await bcrypt.hash(this.password,10);
})
//compare password
userSchema.methods.comparePassword = async function(enterpassword){
    return bcrypt.compare(enterpassword,this.password)
}
module.exports = mongoose.model("User",userSchema)