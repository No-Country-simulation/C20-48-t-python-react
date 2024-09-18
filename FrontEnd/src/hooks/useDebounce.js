import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Establece un timer que actualizará el valor después del tiempo de delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // console.log(debouncedValue);
    // Cleanup: si el valor cambia antes de que se cumpla el delay, limpia el timer
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
