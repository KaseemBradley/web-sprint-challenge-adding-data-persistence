// build your `/api/tasks` router here
const router = require("express").Router();
const Tasks = require("./model");

router.get("/", (req, res) => {
  Tasks.find()
    .then((data) => {
      data.map((task) => {
        task.task_completed
          ? (task.task_completed = true)
          : (task.task_completed = false);
        return task;
      });
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err.message);
    });
});

router.post("/", (req, res) => {
  tasks
    .insert(req.body)
    .then((task) => {
      task.task_completed
        ? (task.task_completed = true)
        : (task.task_completed = false);
      res.status(201).json(task);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err.message);
    });
});

module.exports = router;
