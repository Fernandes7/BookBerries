import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  bookid: { type: mongoose.Schema.Types.ObjectId, ref: "Bookdata" },
  bookreview:{type:String},
  bookscore:{type:Number}
});

const RewiewSchema=mongoose.model("Reviews",reviewSchema)

export {RewiewSchema}
