export default class CommentModel {
    constructor(id, userId, postId, content) {
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }


    static getAll(){
        return Comment;
    }

    static create(userId, postId, content) {
        const comment = new CommentModel(userId, postId, content);
        comment =   Comment.length + 1,
        Comment.push(comment);
        return comment;
    }




}

Comment = [
    {
        id: 1,
        userId: 2,
        postId: 1,
        content: 'New post!',
    },
    {
        id: 1,
        userId: 3,
        postId: 2,
        content: 'Old post!',
    },
    {
        id: 1,
        userId: 1,
        postId: 3,
        content: 'Great post!',
    }
]