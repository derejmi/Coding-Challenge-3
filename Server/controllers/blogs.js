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

router.get("/:id", async (req, res) => {
  try {
    const specificBlog = await Blog.findByID(1);
    res.status(200).res.json(specificBlog);
  } catch (err) {
    res.status(404).res.send({ err });
  }
});

router.post("/", async (req, res) => {
  try {
    const createdBlog = await Blog.create();
    res.status(201).res.json(createdBlog);
  } catch (err) {
    res.status(400).send({ err });
  }
});

module.exports = router;
