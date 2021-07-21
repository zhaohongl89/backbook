"use strict"
const mediadb = require('../models/MediaDB');
const {verify} = require('../middleware')

var mediaDBObject = new mediadb();
function routeMedia(app) {
    app.route('/api/media')
        .get(mediaDBObject.viewListOfMedia);
    app.route('/api/media')
        .post(verify, mediaDBObject.createMedia);
    app.route('/api/media/:id')
        .put(verify, mediaDBObject.updateMedia);
}
//to enable other modules/files to be able to use this object
module.exports = { routeMedia };