const mongoose = require("mongoose");
require("dotenv").config();

// Connection to mongodb server
mongoose
  .connect(
    `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.lhlyvrl.mongodb.net/`,
    {
      dbName: "test",
    }
  )
  .catch((error) => console.log(error)); // Error management recomended by documentation

const db = mongoose.connection;

// Events
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("You are connected to database"));

module.exports = mongoose;
