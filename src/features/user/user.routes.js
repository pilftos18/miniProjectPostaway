import express from  'express';
import UserController from './user.controller.js';

const userRouter = express.Router();
const userController = new UserController();

userRouter.post('/signup', userController.postSignup);
userRouter.post('/signin', userController.postSignin);
userRouter.get('/', userController.getUser);


export default userRouter;