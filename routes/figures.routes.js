const express = require("express");
const router = express.Router();
const { getAllFigures } = require("../controllers/figures.controller");
const validateFigure = require("../middleware/validateFigure");
const { addFigure } = require("../controllers/figures.controller");

router.post("/", validateFigure, addFigure);
router.get("/", getAllFigures);
module.exports = router;
