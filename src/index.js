import express from "express"
import { connection } from "./connections/databaseconnect.js"
import BookRouter from "./routers/bookroute.js"
import cors from "cors"
import SentimentalRoute from "./routers/sentimentalRoute.js"
import UserRoutes from "./routers/userRoutes.js"

const port=3001
const app=express()

connection

app.use(express.json())
app.use(cors())

app.use("/",BookRouter)
app.use("/",SentimentalRoute)
app.use("/",UserRoutes)

app.get("/healthcheck",(req,res)=>{
    res.json("Hello BookBerries")
})

app.listen(port,()=>{
    console.log("Server is running on port 3001")
})