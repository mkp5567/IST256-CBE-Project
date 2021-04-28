//copied from zyBooks figure 11.8.7

var mongoose = require("mongoose");

/*mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb+srv://group2:ist256group2@cluster0.nj3me.mongodb.net/myMember?retryWrites=true&w=majority", 
   { useNewUrlParser: true });*/
   


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
