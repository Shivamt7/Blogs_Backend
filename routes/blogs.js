const express = require("express");
const router = express.Router();

const { createBlog } = require("../controllers/createBlog");

router.post("/createBlog", createBlog);

module.exports = router;
