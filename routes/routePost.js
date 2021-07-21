"use strict"
const postdb = require('../models/PostDB');
const {verify} = require('../middleware')

var postDBObject = new postdb();

function routePost(app) {
    app.route('/api/posts')
        .get(postDBObject.viewListOfPosts);
    app.route('/api/posts')
        .post(verify, postDBObject.createPost);
    app.route('/api/posts/:id')
        .put(postDBObject.updatePost);
    app.route('/api/posts/:id')
        .delete(postDBObject.deletePost);
}
//to enable other modules/files to be able to use this object
module.exports = { routePost };