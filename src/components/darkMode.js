import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    () => window.localStorage.getItem("isDarkmode") || "no"
  );

  useEffect(() => {
    window.localStorage.setItem("isDarkmode", darkMode);
  }, [darkMode]);

  const handleDarkMode = () => {
    darkMode === "yes" ? setDarkMode("no") : setDarkMode("yes");
  };

  return (
    <>
      {darkMode === "yes"
        ? document.body.classList.add("dark-mode")
        : document.body.classList.remove("dark-mode")}

      <button
        onClick={handleDarkMode}
        className="border py-2 px-3 text-xl shadow hover:shadow-lg focus:outline-none select-none rounded-md"
      >
        {darkMode === "yes" ? (
          <span role="img" aria-label="moon emoji">
            🌚
          </span>
        ) : (
          <span role="img" aria-label="sun emoji">
            🌝
          </span>
        )}
      </button>
    </>
  );
};

export default DarkMode;
