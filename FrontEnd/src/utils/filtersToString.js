export default function filtersToString(filters) {
  if (typeof filters === "string") return filters;
  return Object.entries(filters)
    .filter(([key, value]) => value !== null)
    .map(([key, value]) => {
      return `${value}`;
    })
    .join(" | ");
}
