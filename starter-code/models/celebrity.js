const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const newSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
}
);

const Celebrity = mongoose.model("Celebrity", newSchema);

module.exports = Celebrity;