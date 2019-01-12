// Set up MySQL connection.
var mysql = require("mysql");

var connection;
// var JAWSDB_URL= "mysql://ben03awrpjvkcd4b:riwejfms6euiels3@tyduzbv3ggpf15sx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/xiv5brrf06ircwyw";
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
connection =  mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB.PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
};



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
   
  }
  console.log("connected");
  console.log("connected as id " + connection.threadId);
  return;
  
});

// Export connection for our ORM to use.
module.exports = connection;
