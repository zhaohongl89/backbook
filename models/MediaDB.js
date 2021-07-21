"use strict"
//import database connection file as a db object into this file
var db = require('../db-connection');
const Media = require("./Media");

class MediaDB {
    viewListOfMedia(request, respond) {
        var sql = "select * from media";

        db.query(sql, function (error, result) {
           if (result.length == 0 || error) {
                respond.status(401).json({ message: "error viewing list of medias" });
            }
            else {
                respond.status(200).json(result);
            }
        });
    }
    createMedia(request, respond) {
        var url = request.body.url;

        var sql = "INSERT into media(url)" +
            "VALUES(?)";
        db.query(sql, url, function (error, result) {
            if (error) {
                respond.status(401).json({ message: "error creating new media" });
            }
            else {
                respond.json({ message: "media created successful" });
            }
        });
    }
    updateMedia(request, respond) {
        var id = request.params.id;
        var url = request.body.url;

        var sql = "UPDATE media SET url = ?" +

            "where id = ?";

        var values = [url, id];

        db.query(sql, values, function (error, result) {
            if (result.affectedRows == 0 || error) {
                respond.status(401).json({ message: "Error updating media" });
            }
            else {
                respond.status(200).json({ message: "media updated successfully" });
            }
        });
    }
}
//to enable other modules/files to be able to use this object
module.exports = MediaDB;