// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();
var connection;
var JAWSDB_URL= "mysql://ben03awrpjvkcd4b:riwejfms6euiels3@tyduzbv3ggpf15sx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/xiv5brrf06ircwyw";
if(JAWSDB_url){
  connection = mysql.createConnection(JAWSDB_URL);
}else{
connection =  mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '!#Trytaylor13',
  database: 'burgers_db'
});
};



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
