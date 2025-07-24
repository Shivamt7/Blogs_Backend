const mongoose = require("mongoose");

require("dotenv").config({
  debug: true,
});

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {})
    .then(() => console.log("Database is successfully connected"))
    .catch((err) => {
      console.log("Issue while connecting to Database");
      console.error(err.message);
      process.exitCode = 1;
    });
};

module.exports = dbConnect;
