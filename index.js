import express from "express";
import cors from "cors";
import userRouter from "./src/features/user/user.routes.js";
import cookieParser from "cookie-parser";
import jwtAuth from "./src/middleware/jwt.middleware.js";
import postRouter from "./src/features/post/post.routes.js";
import commentRouter from "./src/features/comment/comment.routes.js";
import LikeRouter from "./src/features/like/like.routes.js";
import loggerMiddleware from "./src/middleware/logger.middleware.js"
import { ApplicationError } from "./src/error-handler/applicationError.js";

const server = express();

server.use(express.json());
server.use(cookieParser());
server.use(cors());
server.use(loggerMiddleware);

server.use("/api/users", userRouter);
server.use("/api/posts", jwtAuth, postRouter)
server.use("/api/comments", jwtAuth, commentRouter)
server.use("/api/likes", jwtAuth, LikeRouter)

server.get('/',(req,res)=>{
    res.send("Welcome to PostAway!")
})

//Error Handler Middleware
server.use((error,req, res, next) => {
    console.log(error);
  
    if(error instanceof ApplicationError){
       // 400 for bad request, 401 for unauthorized, 403 for forbidden, 404 for not found, 500 for server error, 503 for service 
      return res.status(error.statusCode).json({ message: error.message }); 
    }
    res.status(500).send('Something went wrong!');  // 503 for service error
    
  })
  
  server.use((req, res) => {
    res.status(404).send("API Not Found.");
  });
  

server.listen('3534', ()=>{
    console.log("Server is running on port 3534")
})
