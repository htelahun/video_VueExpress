var mysql = require('mysql');//the require with PHP

var config = require('../config');



var connect = mysql.createConnection({

host: config.host,

port: config.port,

user: config.user,

password : config.pass,

database : config.database



});



module.exports = connect; 
