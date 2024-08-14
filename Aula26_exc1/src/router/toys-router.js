const express = require("express");
const router = express.Router();
const toyController = require("../controller/toys-controller");

router.get("/", toyController.getAllToys);
router.post("/", toyController.createToy);

module.exports = router;
