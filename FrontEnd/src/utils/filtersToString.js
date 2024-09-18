export default function filtersToString(filters) {
  if (typeof filters === "string") return filters;
  return Object.entries(filters)
    .filter(([key, value]) => value !== null)
    .filter(([key, value]) => typeof value !== "number")
    .map(([key, value]) => {
      return `${value}`;
    })
    .join(" | ");
}
