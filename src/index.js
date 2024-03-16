import express from "express"
import { connection } from "./connections/databaseconnect.js"
import BookRouter from "./routers/bookroute.js"
import cors from "cors"

const port=3001
const app=express()

connection

app.use(express.json())
app.use(cors())
app.use("/",BookRouter)

app.get("/healthcheck",(req,res)=>{
    res.json("Hello BookBerries")
})

app.listen(port,()=>{
    console.log("Server is running on port 3001")
})