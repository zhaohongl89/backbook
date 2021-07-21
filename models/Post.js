"use strict";
class Post {
    constructor(id, userId, mediaId, content,date_created,date_updated) {
        this.id = id;
        this.userId = userId;
        this.mediaId = mediaId;
        this.content = content;
        this.date_created = date_created;
        this.date_updated = date_updated;
    }
    getId() {
        return this.id;
    }
}
//to enable other modules/files to be able to use this object
module.exports = Post;
