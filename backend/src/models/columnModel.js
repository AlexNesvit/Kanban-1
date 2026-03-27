function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function createColumn({ id, name }) {
  if (!isNonEmptyString(id)) {
    throw new Error('Column id must be a non-empty string.');
  }

  if (!isNonEmptyString(name)) {
    throw new Error('Column name must be a non-empty string.');
  }

  return {
    id: id.trim(),
    name: name.trim()
  };
}
