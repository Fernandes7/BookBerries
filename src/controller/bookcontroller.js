import { BookSchema } from "../models/bookmodel.js"
import { OrderSchema } from "../models/orderModel.js"


const addBook=async(req,res)=>{
    try{
    const addedbook=new BookSchema(req.body.data)
    const savedbook=await addedbook.save()
    if(savedbook)
    res.status(200).json({success:true,data:savedbook})
    else
    res.status(200).json({success:false, data:"Failed to save book"})
    }
    catch(e)
    {
        res.status(500).json({success:false, data:e.message})
    }
}

const viewallbook=async(req,res)=>{
    try{
    const fetchallbookdata=await BookSchema.find()
    if(fetchallbookdata)
    res.status(200).json({success:true,data:fetchallbookdata})
    }
    catch(e)
    {
        res.status(500).json({success:false,data:e.message})
    }
}

const deletebook=async(req,res)=>{
    try{
const deteted=await BookSchema.findByIdAndDelete(req.body.data)
if(deteted)
res.status(200).json({success:true,data:"Book Deleted Successfully"})
    }
    catch(e)
    {
        res.status(500).json({success:false,data:e.message})
    }

}

const orderbook=async(req,res)=>{
    try{
    const findbook=await OrderSchema.findOne({bookid:req.body.data.bookid})
    if(findbook)
    {
        findbook.ordercount=findbook.ordercount+1
        await findbook.save()
    }
    else
    {
        const newbookorder=new OrderSchema(req.body.data)
        await newbookorder.save()
    }
    res.status(200).json({success:true,data:"Book Orderd Successfully"})
    }
    catch(e)
    {
        res.status(500).json({success:false,data:e.message})
    }
}


const viewallorders=async(req,res)=>{
    try{
    const orders=await OrderSchema.find().populate("bookid")
    res.status(200).json({success:true,data:orders})
    }
    catch(e)
    {
        res.status(500).json({success:false,data:e.message})
    }
}

export {addBook,viewallbook,deletebook,orderbook,viewallorders}    