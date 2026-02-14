const AppError = require("../utils/AppError");

const validateQuery = (req, res, next) => {
  const { page, limit, century } = req.query;

  if (page && (!Number.isInteger(+page) || +page <= 0)) {
    return next(new AppError("Page must be a positive integer", 400));
  }

  if (limit && (!Number.isInteger(+limit) || +limit <= 0)) {
    return next(new AppError("Limit must be a positive integer", 400));
  }

  if (century && !Number.isInteger(+century)) {
    return next(new AppError("Century must be an integer", 400));
  }

  next();
};

module.exports = validateQuery;
