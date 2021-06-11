// build your `/api/resources` router here
const router = require("express").Router();
const Resources = require("./model");

router.get("/", (req, res) => {
  Resources.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err.massage);
    });
});

router.post("/", (req, res) => {
  Resources.insert(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json(err.massage);
    });
});

module.exports = router;
