"use strict"
//import database connection file as a db object into this file
var db = require('../db-connection');

class CommentsDB {
    createComment(request, respond) {
        var postId = request.body.postId;
        var mediaId = request.body.mediaId;
        var userId = request.body.userId;
        var content = request.body.content;

        var sql = "INSERT into comment(postId, mediaId, userId, content)" +
            "VALUES(?,?,?,?)";
        var values = [postId, mediaId, userId, content]
        db.query(sql, values, function (error, result) {
            if (error) {
                respond.status(401).json({ message: "error creating new comment" });
            }
            else {
                respond.json({ message: "comment created successful" });
            }
        });
    }
    viewListOfCommentsForPost(request, respond) {
        var postId = request.body.id;

        var sql = "select * from comment where postid = ?";

        db.query(sql, postId, function (error, result) {
            if (result.length == 0 || error) {
                respond.status(401).json({ message: "error viewing list of comments for post" });
            }
            else {
                respond.status(200).json(result);
            }
        });
    }
    viewCommentsFromUser(request, respond) {
        var id = request.params.id;
        var sql = "select * from comment where userid = ?";

        db.query(sql, id, function (error, result) {

            if (result.length == 0 || error) {
                respond.status(401).json({ message: "error viewing list of comments made by a user" });
            }
            else {
                respond.status(200).json(result);
            }
        });
    }
    updateComment(request, respond) {
        var id = request.params.id;
        var content = request.body.content;

        var sql = "UPDATE comment SET content = ?" +
            "where id = ?";

        var values = [content, id];

        db.query(sql, values, function (error, result) {
            if (error) {
                respond.status(401).json({ message: "Error updating comment" });
            }
            else {
                respond.status(200).json({ message: "comment updated successfully" });
            }
        });
    }
    deleteComment(request, respond) {
        var id = request.params.id;

        var sql = "DELETE FROM comment WHERE id = ?";

        db.query(sql, id, function (error, result) {
            console.log(result);
            if (error) {
                respond.status(401).json({ message: "error deleting comment" });
            }
            else {
                respond.status(200).json({ message: "comment deleted successfully" });
            }
        });
    }

}
//to enable other modules/files to be able to use this object
module.exports = CommentsDB;