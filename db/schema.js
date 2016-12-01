var mongoose = require('mongoose')


var SundaeSchema = new mongoose.Schema({
  flavor: String,
  ingredients: String,
  photo: String
})


mongoose.Promise = global.Promise;
mongoose.model("Sundae", SundaeSchema)
mongoose.connect("mongodb://localhost/sundae")

module.exports = mongoose;
