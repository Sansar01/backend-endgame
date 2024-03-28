const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")
mongoose.connect("mongodb://localhost:27017/newapp");

const userSchema = mongoose.Schema({
   username:String,
   email:String,
   password:String,
   secret :String
})

userSchema.plugin(plm);
module.exports = mongoose.model('user',userSchema);
