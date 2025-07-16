"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import Button from "@mui/material/Button";

const Preferences = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-6">
      {/* <h1 className="text-xl font-semibold mb-4">Preferences</h1>
      <p className="mb-2">Current theme: <strong>{theme}</strong></p>
      <Button onClick={toggleTheme} variant="contained">
        Toggle Theme
      </Button> */}
    </div>
  );
};

export default Preferences;