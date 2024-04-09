import { UserSchema } from "../models/userModel.js"
import bcrypt from "bcrypt"

const signup=async(req,res)=>{
    try
    {
    const saltrounds=10;
    const isExistuser=await UserSchema.findOne({useremail:req.body.data.useremail})
    if(isExistuser)
    res.status(200).json({success:false,data:"The Enterd user Email is already Exist"})
    else
    {
        const hashedpassword=await bcrypt.hash(req.body.data.userpassword,saltrounds)
        const newuserdata=new UserSchema({userpassword:hashedpassword,useremail:req.body.data.useremail,username:req.body.data.username})
        const saved=await newuserdata.save()
        if(saved)
        res.status(200).json({success:true,data:saved})
    }
}
catch(e)
{
    res.status(500).json({success:false,data:e.message})
}
}


const login=async(req,res)=>{
try{
const finduser=await UserSchema.findOne({useremail:req.body.data.useremail})
if(finduser)
{
    const passowrdmatch=await bcrypt.compare(req.body.data.userpassword,finduser.userpassword)
    if(passowrdmatch)
    res.status(200).json({success:true,data:"Loggined Successfully"})
    else
    res.status(200).json({success:false,data:"Invalid Password"})
}
else
res.status(200).json({success:false,data:"Invalid UserEmail"})
}
catch(e)
{
    res.status(500).json({success:false,data:e.message})
}
}


export {signup,login}