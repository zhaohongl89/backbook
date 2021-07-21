"use strict"
const userdb = require('../models/UserDB');
const {verify} = require('../middleware')

var userDBObject = new userdb();

function routeUser(app) {
    app.route('/api/users/login')
        .post(userDBObject.login);
    app.route('/api/users/register')
        .post(userDBObject.register);
    app.route('/api/users')
        .get(userDBObject.viewListOfUsers);
    app.route('/api/users/:role')
        .get(userDBObject.viewUsersByRole);
    app.route('/api/users/:id')
        .put(verify, userDBObject.updateUserProfile);
    app.route('/api/users/password/:id')
        .put(verify,userDBObject.updateUserPassword);
    app.route('/api/users/:id')
        .delete(verify, userDBObject.deleteUser);
}
//to enable other modules/files to be able to use this object
module.exports = { routeUser };