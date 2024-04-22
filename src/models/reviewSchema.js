import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  bookid: { type: mongoose.Schema.Types.ObjectId, ref: "Bookdata" },
  userid:{type:mongoose.Schema.Types.ObjectId, ref: "User"},
  bookreview:{type:String},
  bookscore:{type:Number}
},{timestamps:true});

const RewiewSchema=mongoose.model("Reviews",reviewSchema)

export {RewiewSchema}
