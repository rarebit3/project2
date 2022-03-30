const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Wine = new Schema(
  {
    cellar: { type: String, required: true},
    producer: { type: String, required: true },
    name: { type: String, required: true },
    vintage: { type: String, required: true },
    region: { type: String, required: true },
    subregion: { type: String, required: false },
    tasted: { type: Boolean, required: true },
    glass: { type: String, required: false },
    pair: { type: String, required: false },
    friends: { type: String, required: false },
    description: { type: String, required: false },
    notes: { type: String, required: false },
    image: { type: String, required: false },
    bottles: {type: String, required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("wines", Wine);
