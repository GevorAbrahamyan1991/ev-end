import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemContext";

const Switch = ({ isOn, handleToggle, colorOne, colorTwo }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="ml-2 switch-checkbox"
        id={`switch`}
        type="checkbox"
      />
      <label
        style={{ background: isOn ? colorOne : colorTwo }}
        className="switch-label"
        htmlFor={`switch`}
      >
        <span className={`switch-button`} />
      </label>
    </>
  );
};

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Switch
        isOn={theme === "dark"}
        handleToggle={handleThemeSwitch}
        colorOne="#f8f8f8"
        colorTwo="#131313"
      />
    </>
  );
};

export default ThemeSwitch;
