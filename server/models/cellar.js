const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cellar = new Schema(
  {
    userName: { type: String, required: true },
    cellarName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cellars", Cellar);