const express = require("express");
const router = express.Router();
const validateFigure = require("../middleware/validateFigure");
const {
  getAllFigures,
  addFigure,
  breakAsync,
  getFigureById,
} = require("../controllers/figures.controller");
const asyncHandler = require("../utils/asyncHandler");

router.get("/", getAllFigures);
router.get("/break", asyncHandler(breakAsync));
router.get("/:id", getFigureById);
router.post("/", validateFigure, addFigure);
module.exports = router;
