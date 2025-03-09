import express from 'express';
import LikeController from './like.controller.js';
const LikeRouter = express.Router();

const likeController = new LikeController();

LikeRouter.get('/:postId', likeController.getLikebypostId);

LikeRouter.get('/toggle/:postId', likeController.addLikeByPost);


export default LikeRouter;