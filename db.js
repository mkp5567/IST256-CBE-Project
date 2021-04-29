//content was taken fromhttps://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/ retreval date: 4/28/21 for CRUD.

var mongoose = require("mongoose");

// Connecting to the database
mongoose.connect("mongodb+srv://ranchero4:hellopsu64@cluster0.yrkth.mongodb.net/mydb?retryWrites=true&w=majority", {
   useNewUrlParser: true
}).then(() => {
   console.log("Successfully connected to the database");    
}).catch(err => {
   console.log('Could not connect to the database. Exiting now...', err);
   process.exit();
});

module.exports = mongoose;
