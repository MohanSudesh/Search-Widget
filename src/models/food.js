const mongoose = require("mongoose");

const Food = mongoose.model("Food", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  availableAt: {
    type: String,
    trim: true,
  },
});

module.exports = Food;
