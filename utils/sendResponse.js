const sendResponse = ({
  res,
  statusCode = 200,
  data = null,
  meta = null,
  message = "",
}) => {
  const response = {
    status: statusCode < 400 ? "success" : "error",
  };

  if (data !== null) response.data = data;
  if (meta !== null) response.meta = meta;
  if (message) response.message = message;

  return res.status(statusCode).json(response);
};

module.exports = sendResponse;
