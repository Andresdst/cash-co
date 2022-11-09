import mongoose from "mongoose";

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL || "");

mongoose.connection.once("open", () => {
  console.log("mongo connected");
});

mongoose.connection.on("error", (error) => {
  console.log(error);
  process.exit(0);
});
