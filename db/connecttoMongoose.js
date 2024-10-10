import mongoose from "mongoose";

const connectToMongooese = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to mongo db");
  } catch (error) {
    console.log("Error connecting to mongodb");
  }
};

export default connectToMongooese;
