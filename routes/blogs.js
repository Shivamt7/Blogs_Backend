const express = require("express");
const router = express.Router();

const { createBlog } = require("../controllers/createBlog");
const { getBlog } = require("../controllers/getBlog");
const { getBlogById } = require('../controllers/getBlog')

router.post("/createBlog", createBlog);
router.get("/getBlog", getBlog);
router.get('/getBlogById/:id', getBlogById)

module.exports = router;