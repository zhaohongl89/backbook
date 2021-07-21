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
    host:'ec2-23-23-164-251.compute-1.amazonaws.com',
    port:'5432',
    user:'iouvkfmcyyztvn',
    password:'5e16c1dfc9afdc9d0c60269e0c1ace2458a85d8e2646352a7a6042b0a481cc7b',
    database:'dmfg63vuuac68'
});
module.exports = connection;