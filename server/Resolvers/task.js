const Task = require("../Database/Models/Task");
// const User = require("../Database/models/User");
const task = require("../typeDefs/task");
const resolvers = {
  Query: {
    tasks: async () => {
      return await Task.find();
    },
    singleTask: async (_, { id }) => {
      return await Task.findById(id);
    },
  },
  Mutation: {
    addTask: async (_, { input }) => {
      const task = await new Task({ ...input }).save();
      return task;
    },
    updateTask: async (_, { id, input }) => {
      const task = await Post.findByIdAndUpdate(
        id,
        { ...input },
        { new: true }
      );
      return task;
    },
    deleteTask: async (_, { id }) => {
      await Post.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};
module.exports = resolvers;
