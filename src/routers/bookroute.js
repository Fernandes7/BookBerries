import express from "express"
import { addBook, viewallbook } from "../controller/bookcontroller.js"

const router=express.Router()

router.post("/addbook",addBook)
router.get("/viewallbook",viewallbook)

export default router