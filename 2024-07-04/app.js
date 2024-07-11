const express = require("express");
const hotelRouter = require("./routes/hotelRoutes");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const app = express();

// MIDDLEWARE:
app.use(express.json()); // be sito postman negali postinti ir logina undefined

// app.use((req, res, next) => {
//   console.log("Hello from the middleware.");
//   next();
// });

app.use("/api/v1/hotels", hotelRouter);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/reviews", reviewRoutes);

module.exports = app;
