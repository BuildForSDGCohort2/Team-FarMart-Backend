const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://farmmarrt:gnksmd22@cluster0.x6sjc.mongodb.net/<dbname>?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected successfully...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectDB;
