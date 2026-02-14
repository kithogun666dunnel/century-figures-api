const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    return res.status(statusCode).json({
      status: "error",
      message: err.message,
      stack: err.stack,
    });
  }

  return res.status(statusCode).json({
    status: "error",
    message: statusCode === 500 ? "Something went wrong" : err.message,
  });
};
module.exports = errorHandler;
