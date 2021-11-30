import { ApolloError } from "apollo-server-errors";
import { Task } from "../Database/Models";
const resolvers = {
  Query: {
    tasks: async (_, { category }, { user }) => {
      let tasks;
      if (user) {
        tasks = await (
          await Task.find().sort({ prioritylevel: 1 })
        ).filter((t) => t.owner == user.id);
      } else
        tasks = await (
          await Task.find().sort({ prioritylevel: 1 })
        ).filter((t) => t.owner == "mock");
      if (category)
        return await (
          await Task.find().sort({ prioritylevel: 1 })
        ).filter((t) => t.category == category && t.owner == user.id);

      return tasks;
    },
    task: async (_, { id }) => {
      return await Task.findById(id);
    },
  },
  Mutation: {
    addTask: async (_, { input }, { user }) => {
      const task = await new Task({
        ...input,
        owner: user._id,
        createdAt: new Date().toISOString(),
      }).save();
      return task;
    },
    updateTask: async (_, { id, input }, { user }) => {
      try {
        const task = await Task.findByIdAndUpdate(
          { _id: id, owner: user._id },
          { ...input },
          { new: true }
        );
        if (!task) throw new error("Unathorized Access");

        return task;
      } catch (error) {
        throw new ApolloError(error.message);
      }
    },
    deleteTask: async (_, { id }, { user }) => {
      try {
        let task = await Task.findByIdAndDelete({
          _id: id,
          owner: user._id,
        });
        if (!task) {
          throw new Error("Unathorized Access");
        }
        return {
          success: true,
          message: "Task Deleted Successfully.",
        };
      } catch (error) {
        throw new ApolloError(error.message);
      }
    },
  },
};
export default resolvers;