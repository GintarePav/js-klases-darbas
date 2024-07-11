const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A hotel must have a name."],
      unique: true,
    },
    address: {
      type: String,
      required: [true, "A hotel must have an address."],
    },
    ranking: {
      type: Number,
      deafult: 4.5,
      min: [1, "Ranking must be 1 and above."],
      max: [5, "Ranking must be 5 or below."],
    },
    price: {
      type: Number,
      required: [true, "A hotel must have a proce."],
    },
    price_discount: {
      type: Number,
    },
    comfort: {
      type: String,
      required: [true, "A hotel must have a comfort level"],
      enum: {
        values: ["1", "2", "3", "4", "5", "6", "7"],
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, "A hotel must have a short summary."],
    },
    description: {
      type: String,
      trim: true,
    },
    image_cover: {
      type: String,
      required: [true, "A hotel must have a cover photo URL."],
    },
    created_at: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

hotelSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "hotel",
  localField: "_id",
});

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
