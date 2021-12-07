import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
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
    retypePasswor: { type: String, required: true, minlength: 5 },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
