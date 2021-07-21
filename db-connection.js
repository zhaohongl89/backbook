/*var mysql = require('mysql');
var connection = mysql.createPool({
    host:'u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port:'3306',
    user:'k5kqwn0xgxm4yqep',
    password:'jonbh1cet0d0rdqe',
    database:'dkvsgtjpxyaqnh3u'
});
module.exports = connection;*/

var mysql = require('mysql');
var connection = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'back_book'
});
module.exports = connection;