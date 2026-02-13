//! V1
const AppError = require("../utils/AppError");

const validateFigure = (req, res, next) => {
  const { name, century, field, description } = req.body;

  if (!name || !century || !field || !description) {
    return next(new AppError("All fields are required", 400));
  }

  if (
    typeof name !== "string" ||
    typeof field !== "string" ||
    typeof description !== "string"
  ) {
    return next(new AppError("Invalid data types", 400));
  }

  if (typeof century !== "number") {
    return next(new AppError("Century must be a number", 400));
  }

  next();
};

module.exports = validateFigure;

//!-->V0
// const validateFigure = (req, res, next) => {
//   const { name, century, field, description } = req.body;

//   if (!name || !century || !field || !description) {
//     return res.status(400).json({
//       success: false,
//       data: null,
//       message: "All fields are required",
//     });
//   }

//   if (
//     typeof name !== "string" ||
//     typeof field !== "string" ||
//     typeof description !== "string"
//   ) {
//     return res.status(400).json({
//       success: false,
//       data: null,
//       message: "Invalid data types",
//     });
//   }

//   if (typeof century !== "number") {
//     return res.status(400).json({
//       success: false,
//       data: null,
//       message: "Century must be a number",
//     });
//   }

//   next();
// };

// module.exports = validateFigure;
