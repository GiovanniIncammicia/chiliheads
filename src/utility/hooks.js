import { useEffect } from "react";

export const useOnClickOutside = (ref, handler = () => {}) => {
  const handleClickOutside = event => ref.current && !ref.current.contains(event.target) && handler();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
};