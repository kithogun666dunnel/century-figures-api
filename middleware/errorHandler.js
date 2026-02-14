const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    return res.status(statusCode).json({
      success: false,
      message: err.message,
      stack: err.stack,
    });
  }

  // Production response
  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Something went wrong" : err.message,
  });
};

module.exports = errorHandler;
