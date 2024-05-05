import mongoose from "mongoose";

const orderschema=new mongoose.Schema({
    bookid:{type: mongoose.Schema.Types.ObjectId, ref: "Bookdata"},
    ordercount:{type:Number,default:1}
},{timestamps:true})

const OrderSchema=mongoose.model("Orders",orderschema)

export {OrderSchema}