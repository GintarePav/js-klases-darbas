const express = require("express");
const router = express.Router({ mergeParams: true }); // kai norim grazinti reviews per hotel route

const reviewController = require("../controllers/reviewController");
const authController = require("../controllers/authController");

router.use(authController.protect);

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(reviewController.createReview);

module.exports = router;
