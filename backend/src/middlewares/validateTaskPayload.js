import { listColumns } from '../services/taskService.js';
import { AppError } from '../errors/AppError.js';

const HEX_COLOR_PATTERN = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function validateTaskPayload(req, _res, next) {
  const { name, color, columnId } = req.body || {};
  const errors = [];

  if (!isNonEmptyString(name)) {
    errors.push('Field "name" is required and must be a non-empty string.');
  }

  if (!isNonEmptyString(color) || !HEX_COLOR_PATTERN.test(color.trim())) {
    errors.push('Field "color" is required and must be a valid HEX color.');
  }

  if (!isNonEmptyString(columnId)) {
    errors.push('Field "columnId" is required and must be a non-empty string.');
  } else {
    const columnExists = listColumns().some((column) => column.id === columnId.trim());
    if (!columnExists) {
      errors.push('Field "columnId" must reference an existing column.');
    }
  }

  if (errors.length > 0) {
    return next(new AppError(400, errors.join(' ')));
  }

  req.validatedTask = {
    name: name.trim(),
    color: color.trim(),
    columnId: columnId.trim()
  };

  return next();
}
