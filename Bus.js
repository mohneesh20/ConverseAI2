const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema(
  {
    seatStatus: { type: Array },
  },
);

module.exports = mongoose.model("Bus", BusSchema);