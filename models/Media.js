"use strict";
class Media {
    constructor(id, url, date_created, date_updated) {
        this.id = id;
        this.url = url;
        this.date_created = date_created;
        this.date_updated = date_updated;
    }
    getId() {
        return this.id;
    }
}
//to enable other modules/files to be able to use this object
module.exports = Media;
