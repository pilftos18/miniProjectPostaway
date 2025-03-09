export default class CommentModel {
    constructor(id, userId, postId, content) {
        this.userId = userId;
        this.postId = postId;
        this.content = content;
        this.id = id;
    }

    static getAll(){
        return Comment;
    }

    static create(comment) {
        comment.id =   Comment.length + 1,
        //const comment = new CommentModel(userId, postId, content);
        Comment.push(comment);
        return comment;
    }

    static getComment(postId){
        const comments = Comment.filter(comment => comment.postId == postId);
        return comments;
    }

    static updateComment(id, userId, content) {
        console.log(id, userId, content);
        
        const comment = Comment.find(comment => comment.id == id && comment.userId == userId);
        if(comment){
            comment.content = content;
            return comment;
        }
    }

    static deleteComment(id){
        const commentIndex = Comment.findIndex(comment => comment.id == id);
        if(commentIndex >-1){
            Comment.splice(commentIndex, 1);
            return true;
        } else {
            return false;
        }
    }

}

const Comment = [
    {
        id: 1,
        userId: 2,
        postId: 1,
        content: 'New post!',
    },
    {
        id: 2,
        userId: 3,
        postId: 2,
        content: 'Old post!',
    },
    {
        id: 3,
        userId: 1,
        postId: 3,
        content: 'Great post!',
    }
]