import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      // Parse stored value or return initial value if parsing fails
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error fetching value from localStorage:", error);
      // Return initial value if parsing fails
      return initialValue;
    }
  });

  useEffect(() => {
    // Update localStorage when storedValue changes
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
