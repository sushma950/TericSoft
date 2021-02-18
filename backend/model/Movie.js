const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    movieName:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("movie", MovieSchema);

