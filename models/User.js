"use strict";
class User {
    constructor(id, name, email, password,role, date_created,date_updated) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.date_created = date_created;
        this.date_updated = date_updated;

    }
    getId() {
        return this.id;
    }
}
//to enable other modules/files to be able to use this object
module.exports = User;
