const Hotel = require("../models/hotelModel");

// ROUTE FUNCTIONS
exports.getAllHotels = async (req, res) => {
  try {
    const Hotels = await Hotel.find();
    res.status(200).json({
      status: "success",
      results: Hotels.length,
      data: {
        Hotels,
      },
    });
    console.log(Hotels);
  } catch (err) {
    console.log(err);
  }
};

exports.createHotel = async (req, res) => {
  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        hotel: newHotel,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      res.status(404).json({
        status: "failed",
        message: "invalid id",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          hotel,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// kitam kartui
exports.updateHotel = (req, res) => {
  if (!req.params.id) {
    res.status(404).json({
      status: "failed",
      message: "invalid id",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      hotel: "updated",
    },
  });
};

exports.deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        hotel: "deleted",
      },
    });
  } catch (err) {
    console.log(err);
  }
};
