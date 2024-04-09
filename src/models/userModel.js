import mongoose from "mongoose";

const userModel=new mongoose.Schema({
    username:{type:String,required:true},
    useremail:{type:String,required:true},
    userpassword:{type:String,required:true},
})

const UserSchema=mongoose.model("User",userModel)

export {UserSchema}