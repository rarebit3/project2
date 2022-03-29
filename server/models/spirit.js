const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Spirit = new Schema(
  {
    cellar: { type: String, required: true},
    producer: { type: String, required: true },
    name: { type: String, required: true },
    subname: { type: String, required: false },
    location: {type: String, required: true},
    agestate: { type: String, required: false },
    tasted: { type: Boolean, required: true },
    glass: { type: String, required: false },
    pair: { type: String, required: false },
    friends: { type: String, required: false },
    description: { type: String, required: false },
    notes: { type: String, required: false },
    image: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("spirits", Spirit);
