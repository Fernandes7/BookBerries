import { BookSchema } from "../models/bookmodel.js"


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


export {addBook,viewallbook,deletebook}    