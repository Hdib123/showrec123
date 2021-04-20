const mongoose = require("mongoose");
const LOCATION_ENUM = require("../utils/consts.js");

const { Schema, model } = mongoose;

const showSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  mainPic: {
    type: String,
    default: "",
  },

  synopsis: {
    type: String,
    min: 20,
  },

  score: Number,

  id: {
    type: Number,
  },
  genre: {
    type: [String],
  },
});

const Event = model("Show", showSchema);

module.exports = Event;
