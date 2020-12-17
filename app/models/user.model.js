const mongoose = require("mongoose");

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      username: String,
      email: String,
      password: String,
      roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "role"
      }
    ]
    })

  const User = mongoose.model("user", schema);
  return User;
};
