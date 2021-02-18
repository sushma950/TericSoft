const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  phonenumber: {
    type: Number,
    required: true
  },
  
  password: {
    type: String,
    required: true
  }
});


// export model user with UserSchema
// var user = mongoose.model("user", UserSchema);
// var movie = mongoose.model("movie", MovieSchema)
//  module.exports = {
//       user:user
      
// }
module.exports = mongoose.model("user", UserSchema);