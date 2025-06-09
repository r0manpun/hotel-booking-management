import { useEffect, useState } from 'react';

/***
 * Custom hook to manage local storage state.
 * @param {string} key - The key under which the value is stored in local storage.
 * @param {any} initialValue - The initial value to set if no value is found in local storage.
 * @returns {[any, function]} - An array containing the current value and a function to update it.
 */

export function useLocalStorageState(initialValue, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
