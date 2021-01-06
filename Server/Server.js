const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const port = 3000;

server.listen(port, () =>
  console.log(`Express now departing from http://localhost:${port}!`)
);

const blogRoutes = require("./controllers/blogs");

server.use("/blogs", blogRoutes);

//Root route
server.get("/", (req, res) => res.send("Hi"));
