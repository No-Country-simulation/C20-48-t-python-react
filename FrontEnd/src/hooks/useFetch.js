import { useState, useEffect, useMemo } from "react";

function useFetch(url, options = {}, dependencies = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoriza `options` para evitar que se cree un nuevo objeto en cada renderizado
  const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, memoizedOptions);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    if (url) {
      fetchData();
    }
  }, [url, memoizedOptions, ...dependencies]);

  return { data, loading, error };
}

export default useFetch;
