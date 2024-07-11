const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); // is pacio node

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      password: req.body.password,
      password_confirm: req.body.password_confirm,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(201).json({
      status: "success",
      data: newUser,
      token,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // 1. Check meail and password exist:
    if (!email || !password) {
      throw new Error("Please provide email and password");
    }
    // 2. Check if user and password correct:
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Incorrect password and email");
    }
    const token = signToken(user.id);
    // 3. If all good, send token to client:
    res.status(201).json({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: token,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      mesagge: err.message,
    });
  }
};

// cia middleware:
exports.protect = async (req, res, next) => {
  try {
    // 1. Get token:
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      throw new Error("User not authenticated");
    }
    // 2. Verify token:
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    // console.log(decoded);
    // 3. Check if user exists:
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      throw new Error("User does not exist");
    }
    // 4. Check if user changed pw:
    if (currentUser.changePasswordAfter(decoded.iat)) {
      throw new Error("User changed password; token is invalid");
    }
    // Grant access:
    req.user = currentUser;
    next();
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: err.message,
    });
  }
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "failed",
        message: "You do not have permissions for this action",
      });
    } else {
      next();
    }
  }; //next, nes middleware
};
