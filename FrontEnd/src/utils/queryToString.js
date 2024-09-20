export default function queryToString(query) {
  const params = new URLSearchParams();

  Object.keys(query).forEach((key) => {
    if (query[key] !== null && query[key] !== undefined) {
      params.append(key, query[key]);
    }
  });

  return params.toString().replace(/\+/g, "%20");
}
