export  default class PostModel{

    constructor(id, userId, caption, imageUrl){
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
    }

    static getAllPost(){
        return Post;
    }
    static getpostByuserId(userId){
        const postByuser =  Post.filter(post => post.userId ==  userId);
        return postByuser;
    }

    static createPost(newpost)
    {
        newpost.id = Post.length+1;
        Post.push(newpost);
        return newpost;
    }

    static getpostById(id){
        const post = Post.find(post => post.id == id);
        console.log("post",post);
        
        return post;
    }

    static updatePost(id, userId, caption, imageUrl){
        const post = Post.find(post => post.id == id && post.userId == userId);
        if(post){
            post.caption = caption;
            post.imageUrl = imageUrl;
            return post;
        } else {
            return null;
        }
    }

    static deletePost(id){
        const postIndex = Post.findIndex(post => post.id == id);
        if(postIndex >-1){
            Post.splice(postIndex, 1);
            return true;
        } else {
            return false;
        }
    }
 }


const Post = [
{
    id: 1,
    userId: 1,
    caption: "First Post",
    imageUrl: "https://example.com/image1.jpg"
},
{
    id: 2,
    userId: 2,
    caption: "Second Post",
    imageUrl: "https://example.com/image2.jpg"
},
{
    id: 3,
    userId: 1,
    caption: "Third Post",
    imageUrl: "https://example.com/image3.jpg"
},
{
    id: 4,
    userId: 2,
    caption: "fourth Post",
    imageUrl: "https://example.com/image2.jpg"
},]