"use strict"
const commentdb = require('../models/CommentsDB');
const {verify} = require('../middleware')

var commentDBObject = new commentdb();

function routeComment(app) {
    app.route('/api/comments/post/:id')
        .get(commentDBObject.viewListOfCommentsForPost);
    app.route('/api/comments/:id')
        .get(verify, commentDBObject.viewCommentsFromUser);
    app.route('/api/comments')
        .post(verify, commentDBObject.createComment);
    app.route('/api/comments/:id')
        .put(commentDBObject.updateComment);
    app.route('/api/comments/:id')
        .delete(commentDBObject.deleteComment);
}
//to enable other modules/files to be able to use this object
module.exports = { routeComment };