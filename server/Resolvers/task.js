const Task = require("../Database/Models/Task");
const task = require("../typeDefs/task");
const resolvers = {
  Query: {
    tasks: async (_, { category }) => {
      if (category)
        return await (await Task.find()).filter((t) => t.category == category);
      return await Task.find();
    },
    task: async (_, { id }) => {
      return await Task.findById(id);
    },
  },
  Mutation: {
    addTask: async (_, { input }) => {
      const task = await new Task({ ...input }).save();
      return task;
    },
    updateTask: async (_, { id, input }) => {
      const task = await Task.findByIdAndUpdate(
        id,
        { ...input },
        { new: true }
      );
      return task;
    },
    deleteTask: async (_, { id }) => {
      await Task.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};
module.exports = resolvers;
