const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


const UserSchema = new mongoose.Schema({
  firstName : {
    type : String,
    required : [true , "First Name is Required"]
  },

  lastName : {
    type : String,
    required : [true , "First Name is Required"]
  },
  email: {
    type: String,
    required: [true, "Email address is required!"],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"],
  },
  provider: {
    type: String,
    required: [true, "Provider ID is required!"],
  },
  subscription: {
    type: String,
    required: [true, "Provider ID is required!"],
  },
  role: {
    type: String,
    enum: ["USER", "SELLER", "BUYER"],
    default: "USER",
  },

  password: {
    type: String,
    minlength: 8,
    select: false,
  },

  resetPasswordToken: String,

  resetPasswordExpire: Date,

  isNewUser: {
    type: Boolean,
  },

  status: {
    type: String,
    enum: ["ACTIVE", "DISABLED"],
    default: "ACTIVE",
  },

  deleted: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  lastSeen: {
    type: Date,
  },
});

// Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Sig JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token and set to resetPassword token field
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  // Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes

  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);
