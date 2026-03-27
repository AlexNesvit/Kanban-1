const HEX_COLOR_PATTERN = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function createTask({ id, name, color, columnId }) {
  if (!isNonEmptyString(id)) {
    throw new Error('Task id must be a non-empty string.');
  }

  if (!isNonEmptyString(name)) {
    throw new Error('Task name must be a non-empty string.');
  }

  if (!isNonEmptyString(color) || !HEX_COLOR_PATTERN.test(color.trim())) {
    throw new Error('Task color must be a valid HEX color.');
  }

  if (!isNonEmptyString(columnId)) {
    throw new Error('Task columnId must be a non-empty string.');
  }

  return {
    id: id.trim(),
    name: name.trim(),
    color: color.trim(),
    columnId: columnId.trim()
  };
}
