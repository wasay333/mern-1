import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./routes/user.route.js";
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log(err)
});
const app = express(); 
app.listen(3000, ()=>{
    console.log("server is running on 3000")
})
app.use("/api/user", router);