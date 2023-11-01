import { useState } from "react";

function useLocalStorage(key: any, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error getting item from local storage:", error);
      return initialValue;
    }
  });

  const setLocalValue = (value: any) => {
    try {
      if (typeof value === "function") {
        setStoredValue((prevValue: any) => {
          const updatedValue = value(prevValue);
          localStorage.setItem(key, JSON.stringify(updatedValue));
          return updatedValue;
        });
      } else {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
      }
    } catch (error) {
      console.error("Error setting item to local storage:", error);
    }
  };

  return [storedValue, setLocalValue];
}

export default useLocalStorage;
