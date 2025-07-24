const express = require("express");
const app = express();
const blogRoutes = require("./routes/blogs");
const dbConnect = require("./config/database");

require("dotenv").config({
  debug: true,
});

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api/v1", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} Port`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send("<h1>Hello Babby...</h1>");
});
