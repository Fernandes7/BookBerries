import express from "express"
import { login, signup, viewallusers } from "../controller/userController.js"

const router=express.Router()

router.post("/signin",signup)
router.post("/login",login)
router.get("/viewallusers",viewallusers)

export default router