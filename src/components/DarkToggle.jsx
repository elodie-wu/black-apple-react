import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { useState } from "react";

function DarkToggle() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => {
    setIsDark(!isDark);
    // document.documentElement.classList.toggle("dark");
  };

  const root = document.documentElement;
  if (isDark) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  return (
    <button
      className="p-1 bg-gray-200 dark:bg-black rounded-full
    hover:bg-gray-300 dark:hover:bg-black transition-all duration-300
    hover:rotate-12
    "
      onClick={toggleDark}
    >
      {isDark ? (
        <FiMoon size={24} className="animate-pulse" />
      ) : (
        <FiSun size={24} className="animate-pulse" />
      )}
    </button>
  );
}

export default DarkToggle;
