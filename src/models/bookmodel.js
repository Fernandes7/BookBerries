import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    bookname:{type:String,required:true},
    bookimage:{type:String,required:true},
    bookauthor:{type:String,required:true},
    bookpublisher:{type:String,required:true},
    bookprice:{type:Number,required:true}
})

const BookSchema=mongoose.model("Bookdata",bookSchema)   
export {BookSchema}
