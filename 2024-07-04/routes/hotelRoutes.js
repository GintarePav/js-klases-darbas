const express = require("express");
const router = express.Router();
const hotelController = require("./../controllers/hotelController");

// route nebedubliuojam nuo hotelRouter app.js faile; router seniau buvo app.
router
  .route("/")
  .get(hotelController.getAllHotels)
  .post(hotelController.createHotel);

router
  .route("/:id")
  .get(hotelController.getHotelById)
  .patch(hotelController.updateHotel)
  .delete(hotelController.deleteHotel);

module.exports = router;

/*
// Main route
app.get("/", (req, res) => {
  res.send("Hello World!");
}); //request, response

// Hotel list
app.get("/api/v1/hotels", getAllHotels); // su get galima per browser pasiekti duomenis

// Create new hotel
app.post("/api/v1/hotels", createHotel); // post tik su Postman, per browser ne

// Get hotel by ID
app.get("/api/v1/hotels/:id", getHotelById);

// Update hotel
app.patch("/api/v1/hotels/:id", updateHotel);

// Delete hotel
app.delete("/api/v1/hotels/:id", deleteHotel);
*/
