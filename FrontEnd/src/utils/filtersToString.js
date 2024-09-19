export default function filtersToString(filters) {
  if (typeof filters === "string") return filters;
  return Object.fromEntries(
    Object.entries(filters).filter(([key, value]) => value !== null),
  );
}
