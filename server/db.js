//Connect to database
const mysql = require('mysql')
const redis = require('redis')
const config = require('./config.js')

//below code presents configuring the host, port
const redisClient = redis.createClient(config.redisConfig)
module.exports.getMySqlConnection = () => mysql.createConnection(config.mysqlConfig);


// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'me',
//   password : 'secret',
//   database : 'my_db'
// });

// var redisConfig = {
//            "host": "localhost",
//            "port": 6379
//        };
//  redis.createClient(redisConfig);
