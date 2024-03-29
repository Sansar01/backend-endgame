const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")
mongoose.connect("mongodb://localhost:27017/newapp");

const userSchema = mongoose.Schema({
   username:String,
   email:String,
   password:String,
   secret :String,
   fullName: { type: String},
   mobile: { type: String },
   registeredAt: { type: Date, default: Date.now },
   intro: { type: String },
   profile: { type: String },
   gender: { type: String },
   lastLogin: { type: Date },
   dp: [{
      type: String // Assuming dp (display picture) paths are stored as strings for simplicity
    }],
})

userSchema.plugin(plm);
module.exports = mongoose.model('user',userSchema);
