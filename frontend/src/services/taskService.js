function isValidBoardPayload(payload) {
  return (
    payload &&
    Array.isArray(payload.columns) &&
    Array.isArray(payload.tasks)
  );
}

export async function fetchBoardData() {
  const response = await fetch('/api/board');

  if (!response.ok) {
    throw new Error('Unable to fetch board data from API.');
  }

  const payload = await response.json();

  if (!isValidBoardPayload(payload)) {
    throw new Error('Invalid board payload received from API.');
  }

  return payload;
}
