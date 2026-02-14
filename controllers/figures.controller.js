const figures = require("../data/figures.json");
const AppError = require("../utils/AppError");
const sendResponse = require("../utils/sendResponse");
const getAllFigures = (req, res) => {
  let result = [...figures];

  const { century, field, page = 1, limit = 5 } = req.query;

  if (century) {
    result = result.filter((f) => f.century === parseInt(century));
  }

  if (field) {
    result = result.filter((f) => f.field === field);
  }

  const totalRecords = result.length;
  const pageNumber = parseInt(page);
  const pageLimit = parseInt(limit);

  const start = (pageNumber - 1) * pageLimit;
  const end = start + pageLimit;

  const paginatedResult = result.slice(start, end);

  const totalPages = Math.ceil(totalRecords / pageLimit);

  return sendResponse({
    res,
    statusCode: 200,
    data: paginatedResult,
    meta: {
      page: pageNumber,
      limit: pageLimit,
      totalRecords,
      totalPages,
    },
    message: "Figures fetched successfully",
  });
};

const getFigureById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const figure = figures.find((f) => f.id === id);

  if (!figure) {
    return next(new AppError("Figure not found", 404));
  }

  return sendResponse({
    res,
    statusCode: 200,
    data: figure,
    message: "Figure fetched successfully",
  });
};

const addFigure = (req, res) => {
  const newFigure = {
    id: figures.length + 1,
    ...req.body,
  };

  figures.push(newFigure);

  res.status(201).json({
    success: true,
    data: newFigure,
    message: "Figure created successfully",
  });
};

const breakAsync = async (req, res, next) => {
  throw new Error("Async broke");
};

module.exports = {
  getAllFigures,
  addFigure,
  getFigureById,
  breakAsync,
};
