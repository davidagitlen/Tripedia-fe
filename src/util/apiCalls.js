export const getStartAndEnd = async (origin, destination) => {
  const url = process.env.REACT_APP_BACKEND_URL + '';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      origin,
      destination
    }),
    headers: {
      'Content-Type' : 'application/json'
    }
  };
  const response = await fetch(url, options);
  const startAndEndPoints = await response.json();
  return startAndEndPoints
}