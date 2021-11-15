const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "First Name required"] },
  lastName: { type: String, required: [true, "Last Name required"] },
  email: {
    type: String,
    trim: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email!",
    },
    required: [true, "Email required"],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "User Name required"],
    trim: true,
  },
  password: { type: String, required: true, minlength: 5 },
  // tasks: [taskSchema],
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
