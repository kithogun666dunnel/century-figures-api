const express = require("express");
const router = express.Router();
const validateFigure = require("../middleware/validateFigure");
const {
  getAllFigures,
  addFigure,
  breakAsync,
  getFigureById,
} = require("../controllers/figures.controller");

router.get("/", getAllFigures);
router.get("/:id", getFigureById);
router.post("/", validateFigure, addFigure);
router.get("/break", breakAsync);
module.exports = router;
