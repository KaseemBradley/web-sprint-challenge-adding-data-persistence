// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const Projects = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const project = await Projects.find();
    res.json(project);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
