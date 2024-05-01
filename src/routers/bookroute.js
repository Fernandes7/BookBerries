import express from "express"
import { addBook, deletebook, viewallbook } from "../controller/bookcontroller.js"

const router=express.Router()

router.post("/addbook",addBook)
router.get("/viewallbook",viewallbook)
router.post("/deletebook",deletebook)

export default router