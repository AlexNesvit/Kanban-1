export function notFoundHandler(_req, _res, next) {
  const error = new Error('Route not found');
  error.statusCode = 404;
  next(error);
}

export function errorHandler(error, _req, res, _next) {
  const statusCode = Number.isInteger(error.statusCode) ? error.statusCode : 500;

  if (statusCode >= 500) {
    return res.status(500).json({ message: 'Internal server error' });
  }

  return res.status(statusCode).json({ message: error.message || 'Request failed' });
}
