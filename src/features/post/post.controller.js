import PostModel from "./post.model.js";

export default class PostController{

    getPost(req,res){
        const post = PostModel.getAllPost();
        res.status(200).send(post);
    }

    userPost(req, res){
        const userId = req.params.userId;
        const userpost = PostModel.getpostByuserId(userId);
        res.status(200).send(userpost);
    }


    
}