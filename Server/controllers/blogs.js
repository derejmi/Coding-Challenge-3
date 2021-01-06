const express = require("express");

const router = express.Router();

const Blog = require("../models/Blog");

//Blogs show route
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.all;
    res.json(blogs);
  } catch (err) {
    res.status(400).send({ err });
  }
});

//Specific Blog Show route
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const specificBlog = await Blog.findByID(id);
    res.status(200).json(specificBlog);
  } catch (err) {
    res.status(404).send({ err });
  }
});

//Create Blog Route
router.post("/", async (req, res) => {
  try {
    const createdBlog = await Blog.create(
      req.body.title,
      req.body.message,
      req.body.link
    );
    res.status(201).json(createdBlog);
  } catch (err) {
    res.status(400).send({ err });
  }
});

module.exports = router;
