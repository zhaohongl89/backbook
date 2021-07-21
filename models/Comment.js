"use strict";
class Comment {
    constructor(id, postId, mediaId, userId, content, date_created, date_updated) {
        this.id = id;
        this.postId = postId;
        this.mediaId = mediaId;
        this.userId = userId;
        this.content = content;
        this.date_created = date_created;
        this.date_updated = date_updated;
    }
    getId() {
        return this.id;
    }
}
//to enable other modules/files to be able to use this object
module.exports = Comment;
