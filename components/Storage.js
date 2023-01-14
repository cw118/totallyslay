import { useState, useEffect } from "react";

// pre-define methods with fallbacks and error catching
const storage = {
  getItem(key, initialValue) {
    if (typeof window === "undefined") { // checking typeof window prevents SSR errors in Next.js
      return initialValue; // initial value provided is the fallback
    }
    try {
      const unparsedValue = window.sessionStorage[key];
      if (typeof unparsedValue === "undefined") {
        return initialValue; // another fallback
      }
      return JSON.parse(unparsedValue);
    } catch (error) {
      return initialValue; // another fallback
    }
  },

  setItem(key, value) {
    window.sessionStorage[key] = JSON.stringify(value); // add item to sessionStorage
  },
};

export default function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  // useEffect prevents SSR errors by running the code within on the client side only
  useEffect(() => {
    setValue(storage.getItem(key, initialValue)); // pre-defined getItem method set in storage object
  }, [key, initialValue]);

  const setItem = (newValue) => {
    setValue(newValue);
    storage.setItem(key, newValue); // pre-defined setItem method set in storage object
  };

  return [value, setItem];
}