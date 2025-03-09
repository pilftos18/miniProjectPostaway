export default class LikeModel{
    constructor(userId, postId){
        this.userId = userId;
        this.postId = postId;
    }

    getLikeByPostId(postId){
        const result = LikeModel.filter(like => like.postId === postId);
        return result;
    }

    addLikeByPost(postId, userId){
        const like = new LikeModel(userId, postId);
        LikeModel.push(like);
    }

    removeAddLikeByPostId(postId){
        const index = LikeModel.findIndex(like => like.postId === postId);
        if(index !== -1){
            LikeModel.splice(index, 1);
        }
    }
}