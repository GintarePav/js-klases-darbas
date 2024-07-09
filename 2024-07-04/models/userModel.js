const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    isLowercase: true,
    validate: [validator.isEmail, "This is not a valid email"],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is mndatory"],
    minlength: 8,
    select: false,
  },
  password_confirm: {
    type: String,
    required: [true, "Please conform your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
  },
  password_change_date: Date,
  password_reset_token: String,
  password_reset_expire: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  // hash password with 12 cost
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined; // nusiims antras pw ir nenueis i duombaze
  next(); //be sito sustos uzklausa ir duomenys serverio nepasieks
});

userSchema.methods.correctPassword = async (
  candidatePassword,
  userPassword
) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
