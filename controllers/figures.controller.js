const figures = require("../data/figures.json");
const getAllFigures = (req, res) => {
  console.log(req.query);
  let result = [...figures];

  const { century, field, page = 1, limit } = req.query;

  // Filtering
  if (century) {
    result = result.filter((f) => f.century === parseInt(century));
  }

  if (field) {
    result = result.filter((f) => f.field === field);
  }

  // Pagination
  const pageNumber = parseInt(page);
  const pageLimit = parseInt(limit) || result.length;

  const start = (pageNumber - 1) * pageLimit;
  const end = start + pageLimit;

  result = result.slice(start, end);

  res.status(200).json({
    success: true,
    data: result,
    message: "Figures fetched successfully",
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

module.exports = {
  getAllFigures,
  addFigure,
};
