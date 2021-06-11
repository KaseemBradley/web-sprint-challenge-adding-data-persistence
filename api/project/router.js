// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const Projects = require("./model");

router.get("/", (req, res) => {
  Projects.find()
    .then((data) => {
      data.map((project) => {
        project.project_completed
          ? (project.project_completed = true)
          : (project.project_completed = false);
        return project;
      });
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err.message);
    });
});

router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then((project) => {
      project.project_completed
        ? (project.project_completed = true)
        : (project.project_completed = false);
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
