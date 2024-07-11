const express = require("express");
const router = express.Router();
const hotelController = require("./../controllers/hotelController");
const authController = require("../controllers/authController");
const reviewRouter = require("../routes/reviewRoutes");

// route nebedubliuojam nuo hotelRouter app.js faile; router seniau buvo app.
router.use(authController.protect); // padaro, kad visi routes butu apsaugoti nuo neprisijungusiu vartotoju
router
  .route("/")
  .get(authController.restrictTo("user"), hotelController.getAllHotels)
  .post(hotelController.createHotel);

router
  .route("/:id")
  .get(hotelController.getHotelById)
  .patch(hotelController.updateHotel)
  .delete(hotelController.deleteHotel);

router.use("/:hotelId/reviews", reviewRouter); // ir post ir get reikia nurodyti hotel id, kad norint palikti review nerasant viezbucio id sukristu i tinkama viezbuti

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
