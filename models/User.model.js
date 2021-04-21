const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  viewedShows: {
    type: [{ type: Schema.Types.ObjectId, ref: "Show" }],
  },

  favoriteShows: {
    type: [{ type: Schema.Types.ObjectId, ref: "Show" }],
  },
});

const User = model("User", userSchema);

module.exports = User;
