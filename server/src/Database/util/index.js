import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.DATABASE_URL;

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
