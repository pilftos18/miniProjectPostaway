import express from 'express';
import CommentController from './comment.controller.js';

const commentRouter = express.Router();

const commentController = new CommentController();

commentRouter.post('/:postId', commentController.add);
commentRouter.get('/:id', commentController.getComment)
commentRouter.get('/', commentController.getAll)
commentRouter.put('/:id', commentController.update);
commentRouter.delete('/:id', commentController.delete)

export default commentRouter;