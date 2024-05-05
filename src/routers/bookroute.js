import express from "express"
import { addBook, deletebook, orderbook, viewallbook, viewallorders } from "../controller/bookcontroller.js"

const router=express.Router()

router.post("/addbook",addBook)
router.get("/viewallbook",viewallbook)
router.post("/deletebook",deletebook)
router.post("/orderbook",orderbook)
router.post("/vieworders",viewallorders)

export default router