const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `connected to mongoDB ${mongoose.connection.host}`.bgBlue.green
    );
  } catch (error) {
    console.log(`error in connection ${error}`.red);
  }
};

module.exports = connectDB;
