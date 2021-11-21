import mongoose from "mongoose";
const URL =
  "mongodb+srv://Vi_Long_Ombeni:Project123@cluster0.zxacs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export const connection = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// const isValidObjectId = (id) => {
//   return mongoose.Types.ObjectId.isValid(id);
// };
// module.exports = { isValidObjectId, connection };
