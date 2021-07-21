"use strict"
//import database connection file as a db object into this file
var db = require('../db-connection');

class PostDB {
    createPost(request, respond) {
        var userId = request.body.userId;
        var mediaId = request.body.mediaId;
        var content = request.body.content;

        var sql = "INSERT into post(userId, mediaId, content)" +
            "VALUES(?,?,?)";
        var values = [userId, mediaId, content]
        db.query(sql, values, function (error, result) {
            if (error) {
                console.log(error)
                respond.status(401).json({ message: "error creating new post" });
            }
            else {
                respond.json({ message: "post created successful" });
            }
        });
    }
    viewListOfPosts(request, respond) {
        var sql = "select * from post";

        db.query(sql, function (error, result) {
            if (result.length == 0 || error) {
                respond.status(401).json({ message: "error viewing list of posts" });
            }
            else {
                respond.status(200).json(result);
            }
        });
    }
    updatePost(request, respond) {
        var id = request.params.id;
        var content = request.body.content;

        var sql = "UPDATE post SET content = ?" +
            "where id = ?";

        var values = [content, id];

        db.query(sql, values, function (error, result) {
            if (error) {
                respond.status(401).json({ message: "Error updating post" });
            }
            else {
                respond.status(200).json({ message: "post udpated successfully" });
            }
        });
    }
    deletePost(request, respond) {
        var id = request.params.id;

        var sql = "DELETE FROM post WHERE id = ?";
               
        db.query(sql, id, function (error, result) {
            console.log(result);
            if (error) {
                respond.status(401).json({ message: "error deleting post" });
            }
            else {
                respond.status(200).json({ message: "post deleted successfully" });
            }
        });
    }
}
//to enable other modules/files to be able to use this object
module.exports = PostDB;