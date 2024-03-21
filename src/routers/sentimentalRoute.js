import express from "express"
import { fetchReview, findsentimentalscore } from "../controller/sentimentalcontroller.js"


const router=express.Router()

router.post("/findscore",findsentimentalscore)
router.post("/fetchreview",fetchReview)
  
export default router