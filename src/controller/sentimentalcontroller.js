import pkg from 'natural';
import { RewiewSchema } from '../models/reviewSchema.js';
const { SentimentAnalyzer, PorterStemmer }=pkg

const findsentimentalscore=async(req,res)=>{
    try{
    const review=req.body.data.bookreview
    const arrayreview=review.split(" ")
    const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');
    const sentimentScore = analyzer.getSentiment(arrayreview);
    let score;
    if (sentimentScore > 0.5) {
        score = 5; 
    } else if (sentimentScore > 0) {
        score = 3.5; 
    } else if (sentimentScore > -0.5) {
        score = 2; 
    } else {
        score = 0.5;
    }
    const newreview=new RewiewSchema({bookid:req.body.data.bookid,bookreview:review,bookscore:score})
    const saveddata=await newreview.save()
    if(saveddata)
    res.json({success:true,data:saveddata})
    }
    catch(e)
    {
        res.json({success:false,data:e.message})
    }
}


const fetchReview=async(req,res)=>{
    try{
    const fetchdata=await RewiewSchema.find({bookid:req.body.data})
    if(fetchdata)
    res.json({success:true,data:fetchdata})
    }
    catch(e)
    {
        res.json({sucess:false,data:e.message})
    }
}
export {findsentimentalscore,fetchReview}   