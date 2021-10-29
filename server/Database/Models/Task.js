const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    priorityLevel: { type: String, required: true },
    duration: { type: Number, default: 0, required: true },
    isDone: { type: Boolean, default: false, required: true },
    date: { type: Date, default: Date.now, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
