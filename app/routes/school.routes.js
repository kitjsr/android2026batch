module.exports = app => {
  const schools = require("../controllers/school.controller.js");

  var router = require("express").Router();

  // Create a new schools
  router.post("/", schools.create);

  // Retrieve all schoolss
  router.get("/", schools.findAll);

  // Retrieve all published schoolss
  router.get("/active", schools.findAllActive);

  // Retrieve a single schools with id
  router.get("/:id", schools.findOne);

  // Update a schools with id
  router.put("/:id", schools.update);

  // Delete a schools with id
  router.delete("/:id", schools.delete);

  // Create a new schools
  router.delete("/", schools.deleteAll);

  app.use("/api/schools", router);
};
