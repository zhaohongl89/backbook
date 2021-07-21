"use strict"
//import database connection file as a db object into this file
var db = require('../db-connection');
const User = require("./User");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

class UserDB {
    login(request, respond) {
        var name = request.body.name;
        var password = request.body.password;
        var sql = "select * from user where name = ? and password = ?";
        var values = [name, password];

        //TODO do some jwt thing here
        let payload = { name: name };
        let accessToken = jwt.sign(payload,
            `${process.env.ACCESS_TOKEN_SECRET}`,
            {
                algorithm: 'HS256',
                expiresIn: `${process.env.ACCESS_TOKEN_LIFE}`
            }
        );

        db.query(sql, values, function (error, result) {
            if (result.length == 0 || error) {
                respond.status(401).json({ message: "unauthorized user" });
            }
            else {
                respond.status(200).json("access_token:"+accessToken);
            }
        });
    }
    
    register(request, respond) {
        var name = request.body.name;
        var email = request.body.email;
        var password = request.body.password;
        var role = request.body.role;

        var sql = "INSERT into user(name, email, password, role)" +
            "VALUES(?,?,?,?)";
        var values = [name, email, password, role]
        db.query(sql, values, function (error, result) {
            if (error) {
                console.log(error)
                respond.status(401).json({ message: "error creating new user" });
            }
            else {
                respond.json({ message: "Registration Successful" });
            }
        });
    }

    viewListOfUsers(request, respond) {
        //TODO check jwt
        var sql = "select * from user";

        db.query(sql, function (error, result) {
            //TODO check jwt
            if (result.length == 0 || error) {
                respond.status(401).json({ message: "unauthorized user" });
            }
            else if (result.length == 0 || error) {
                respond.status(401).json({ message: "error viewing list of users" });
            }
            else {
                respond.status(200).json(result);
            }
        });
    }

    viewUsersByRole(request, respond) {
        var role = request.body.role;

        var sql = "select * from user where role = ?";
        db.query(sql, role, function (error, result) {
            //TODO check jwt
            if (result.length == 0 || error) {
                respond.status(401).json({ message: "unauthorized user" });
            }
            else if (result.length == 0 || error) {
                respond.status(401).json({ message: "error viewing specific list of users" });
            }
            else {
                respond.status(200).json(result);
            }
        });
    }

    updateUserProfile(request, respond) {
        var userid = request.params.id;
        var name = request.body.name;
        var email = request.body.email;

        var sql = "UPDATE user SET name = ?, email = ? " +
            "where id = ?";

        var values = [name, email, userid];

        db.query(sql, values, function (error, result) {
            if (result.affectedRows == 0  || error) {
                respond.status(401).json({ message: "Error updating user" });
            }
            else {
                respond.status(200).json({ message: "User updated successfully" });
            }
        });
    }

    updateUserPassword(request, respond) {
        var userid = request.params.id;
        var password = request.body.password;

        var sql = "UPDATE user SET password = ?" +
            "where id = ?";

        var values = [password, userid];

        db.query(sql, values, function (error, result) {
            if (result.affectedRows == 0  || error) {
                respond.status(401).json({ message: "Error updating user password" });
            }
            else {
                respond.status(200).json({ message: "Password updated successfully" });
            }
        });
    }

    deleteUser(request, respond) {
        var userid = request.params.id;

        var sql = "DELETE FROM user WHERE id = ?";

        db.query(sql, userid, function (error, result) {
         if (result.affectedRows == 0  || error) {
                respond.status(401).json({ message: "error deleting user" });
            }
            else {
                respond.status(200).json({ message: "user deleted successfully" });
            }
        });
    }
}
//to enable other modules/files to be able to use this object
module.exports = UserDB;