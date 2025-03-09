import express from 'express';
import PostController from './post.controller.js';
import { upload } from '../../middleware/fileupload.middleware.js';

const postRouter = express.Router();

const postController = new PostController();

postRouter.get('/:', postController.userPost);
postRouter.get('/', postController.getPost);
postRouter.get('/:id', postController.postById)
postRouter.post('/', upload.single('imageUrl'), postController.addpost);
postRouter.put('/:postId', upload.single('imageUrl'), postController.updatePost);
postRouter.delete('/:id',  postController.deletePost)


export default postRouter;