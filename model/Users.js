const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  preferences: {
    stock1: String,
    stock2: String,
    stock3: String,
    newsCategory: String,
    newsCountry: String,
    holidayCountry: String,
    weatherLocation: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
