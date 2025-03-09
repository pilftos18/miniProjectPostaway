import LikeModel from "./like.model.js";

export default class LikeController{

    getLikebypostId(req, res){
        const postId = req.params.postId;
        const like = LikeModel.getLikeByPostId(postId);
        res.status(200).send(like);
    }

    addLikeByPost(req, res){
        const postId = req.params.postId;
        const userId = req.user.id;
        LikeModel.removeAddLikeByPostId(postId, userId);
        res.status(200).send("Like added successfully");
    }

    
}