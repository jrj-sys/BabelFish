const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/BabelFish",
  {
    useNewUrlParser: true,
  }
);

module.exports = mongoose.connection;
