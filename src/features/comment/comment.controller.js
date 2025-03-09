import CommentModel from "./comment.model.js";

export default class CommentController{

        getAll(req,res){
            const comments = CommentModel.getAll();
            res.status(200).send(comments);
        }

        add(req,res){
            const userId = req.userID;
            const postId = req.params.postId;
            const content = req.body.content;
            const newcomment={
                userId,
                postId : parseInt(postId),
                content
            }
           const comment = CommentModel.create(newcomment);
           if(!comment){
                res.status(500).send("Something went wrong");
            } else {
                res.status(201).send(comment);
 
           }
        }

        getComment(req, res){
            const id = req.params.id;
            const comments = CommentModel.getComment(id);
            if(!comments){
                res.status(404).send("Comments not found");
            } else {
                res.status(200).send(comments);
            }
        }

        update(req, res){
            const commentId = req.params.id;
            console.log(commentId);
            
            const userId = req.userID
            const content = req.body.content
            const comment =  CommentModel.updateComment(commentId, userId, content);
            if(comment){
                res.status(200).send({success: true, message: comment});
            }else{
                res.status(404).send({success: false, message:"Comment not found"});
            }              
        }

        delete(req, res){
            const id = req.params.id;
            const comment = CommentModel.deleteComment(id);
            if(comment){
                res.status(200).send("Post deleted successfully");
            } else{
                res.status(404).send("Post not found");
            }
           
        }
}