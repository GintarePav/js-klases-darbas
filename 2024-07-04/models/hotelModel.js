const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A hotel must have a name."],
  },
  address: {
    type: String,
    required: [true, "A hotel must have an address."],
  },
  ranking: {
    type: Number,
    deafult: 4.5,
  },
  price: {
    type: Number,
    required: [true, "A hotel must have a proce."],
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
