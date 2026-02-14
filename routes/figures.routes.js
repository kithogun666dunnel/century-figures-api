const express = require("express");
const router = express.Router();
const validateFigure = require("../middleware/validateFigure");
const AppError = require("../utils/AppError");
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
router.all("/", (req, res, next) => {
  next(new AppError(`Method ${req.method} not allowed on this route`, 405));
});
router.all("/:id", (req, res, next) => {
  next(new AppError(`Method ${req.method} not allowed on this route`, 405));
});
module.exports = router;
