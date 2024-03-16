import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    bookname:{type:String},
    bookimage:{type:String},
    bookauthor:{type:String},
    bookpublisher:{type:String},
    bookprice:{type:Number}
})

const BookSchema=mongoose.model("Bookdata",bookSchema)
export {BookSchema}
