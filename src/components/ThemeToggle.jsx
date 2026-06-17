"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/features/themeSlice";
import { useEffect } from "react";

export default function ThemeToggle() {
  const dispatch = useDispatch();

  const mode = useSelector(
    (state) => state.theme.mode
  );

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <button
      onClick={() =>
        dispatch(toggleTheme())
      }
    >
      {mode === "light"
        ? "🌙 Dark Mode"
        : "☀️ Light Mode"}
    </button>
  );
}