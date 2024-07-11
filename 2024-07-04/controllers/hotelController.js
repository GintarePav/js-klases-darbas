const Hotel = require("../models/hotelModel");

// ROUTE FUNCTIONS
exports.getAllHotels = async (req, res) => {
  try {
    // Filtering:
    const queryObject = { ...req.query };
    const excludedFields = ["sort", "limit", "fields"];
    excludedFields.forEach((element) => delete queryObject[element]);

    // Advanced filtering:
    let queryString = JSON.stringify(queryObject);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}` // query rasyti reikia taip: http://localhost:3000/api/v1/hotels?comfort[gte]=5
    );
    // console.log(JSON.parse(queryString));

    let query = Hotel.find(JSON.parse(queryString));

    // Sorting:
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy); // http://localhost:3000/api/v1/hotels?comfort[gte]=6&sort=-price (su - mazejancia tvarka, be - didejancia)
    } else {
      query = query.sort("-created_at"); // http://localhost:3000/api/v1/hotels?comfort[gte]=6&sort
    }

    // Field limiting:
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields); // http://localhost:3000/api/v1/hotels?fields=name,address rodo tik nurodytus
    }

    // Execute query
    const hotels = await query;
    res.status(200).json({
      status: "success",
      results: hotels.length,
      data: {
        hotels,
      },
    });
    // console.log(hotels);
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
    const hotel = await Hotel.findById(req.params.id).populate("reviews"); // populate, kad sudeti reviews is duombazes
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
exports.updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        hotel,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
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
