import PostModel from "./post.model.js";

export default class PostController{

    getPost(req,res){
        const post = PostModel.getAllPost();
        res.status(200).send(post);
    }

    userPost(req, res){
        console.log("hello");
        
        const userId = req.userID;
        const userpost = PostModel.getpostByuserId(userId);
        res.status(200).send(userpost);
    }

    postById(req, res){
        const id = req.params.id;
        const post = PostModel.getpostById(id);
        if(post){
            res.status(200).send(post);
        }else{
            res.status(404).send("Post not found");
        }
    }

    addpost(req, res){
        const userId = req.userID;
        const {caption} = req.body
        // console.log(userId, caption, imageUrl);
        const createNewPost ={
            userId,
            caption : caption,
            imageUrl: req.file.filename
        }

        const post = PostModel.createPost(createNewPost);
            if(post) {
                res.status(200).send(post);
            } else {
                res.status(500).send("Something went wrong");
            }
        }

   

         updatePost(req, res){
            try{
                const userId = req.userID
                const caption = req.body.caption;
                const post =  PostModel.updatePost(req.params.postId, userId, caption, req.file.filename);
              if(post){
                res.status(200).send({success: true, message: post});
              }
              else{
                res.status(404).send({success: false, message:"post not updated"});
              }
            }
            catch(err){
              console.log(err);
              res.status(404).send({success: false, message:"post not updated"});
          
            }
        }

        deletePost(req, res){
            const id = req.params.id;
            const post = PostModel.deletePost(id);
            if(post){
                res.status(200).send("Post deleted successfully");
            } else{
                res.status(404).send("Post not found");
            }
        }
    
}