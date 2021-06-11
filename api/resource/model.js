// build your `Resource` model here
const db = require("../../data/dbConfig");

function find() {
  console.log(db("resources"));
  return db("resources").orderBy("resource_name", "desc");
}

console.log(find());

function findById(id) {
  return db("resources")
    .where("resource_id", id)
    .then((data) => {
      return data[0];
    });
}

function insert(resource) {
  return db("resources")
    .insert(resource)
    .then((ids) => {
      return findById(ids[0]);
    });
}

module.exports = { find, findById, insert };
