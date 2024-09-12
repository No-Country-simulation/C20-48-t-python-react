import { useState, useEffect } from "react";
import useDebounce from "./useDebounce"; // tu hook de debounce
import useFetch from "./useFetch"; // tu hook de fetch
import { recetas } from "../assets/recetas";

function useDebouncedFetch(query, delay) {
  const deb = useDebounce(query, delay);
  return recetas;

  const [url, setUrl] = useState(null);

  // Debouncing the query to avoid unnecessary requests
  const debouncedQuery = useDebounce(query, delay);

  // Adjust the URL based on the debounced query
  useEffect(() => {
    if (debouncedQuery) {
      setUrl(`https://api.example.com/search?${debouncedQuery}`);
    } else {
      setUrl(null); // Avoid fetching when there's no query
    }
  }, [debouncedQuery]);

  // Use the custom useFetch hook to get the data
  const { data, error, isLoading } = useFetch(url);

  return { data, error, isLoading };
}

export default useDebouncedFetch;
