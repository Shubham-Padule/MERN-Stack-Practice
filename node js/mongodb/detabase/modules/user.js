//user.js
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  uId: {
    type: Number,
    default: 0,
  },
  uName: {
    type: String,
    required: true,
    default: "",
  },
  uCity: {
    type: String,
  },
});
const userSchema = mongoose.model("user", UserSchema, "userRec");
module.exports = userSchema;
