//copied from zyBooks figure 11.8.7

const mongoose = require("mongoose");
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb+srv://group2:ist256group2@cluster0.nj3me.mongodb.net/myMember?retryWrites=true&w=majority", 
   { useNewUrlParser: true });
module.exports = mongoose;