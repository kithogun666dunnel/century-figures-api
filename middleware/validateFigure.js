const validateFigure = (req, res, next) => {
  const { name, century, field, description } = req.body;

  if (!name || !century || !field || !description) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "All fields are required",
    });
  }

  if (
    typeof name !== "string" ||
    typeof field !== "string" ||
    typeof description !== "string"
  ) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "Invalid data types",
    });
  }

  if (typeof century !== "number") {
    return res.status(400).json({
      success: false,
      data: null,
      message: "Century must be a number",
    });
  }

  next();
};

module.exports = validateFigure;
