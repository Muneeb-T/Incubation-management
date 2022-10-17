// @ts-nocheck
const errorHandler = (err, req, res, next) => {
  console.log(err)
  const error = { ...err };
  return res.status(error.status || 500).json({
    status : error.status || 500,
    success: false,
    message: error.message || "Something went wrong",
  });
};

export default errorHandler;
