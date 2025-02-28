import express from "express";
import userRouter from "./src/features/user/user.routes.js";
import cookieParser from "cookie-parser";

const server = express();

server.use(express.json());
server.use(cookieParser());
server.use("/api/users", userRouter)

server.get('/',(req,res)=>{
    res.send("Welcome to PostAway!")
})


server.listen('3534', ()=>{
    console.log("Server is running on port 3534")
})
