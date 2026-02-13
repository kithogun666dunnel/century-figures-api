const express = require("express");
const router = express.Router();
const validateFigure = require("../middleware/validateFigure");
const {
  getAllFigures,
  addFigure,
  getFigureById,
} = require("../controllers/figures.controller");

router.get("/", getAllFigures);
router.get("/:id", getFigureById);
router.post("/", validateFigure, addFigure);
module.exports = router;
