import { FiSun } from "react-icons/fi";

function DarkToggle() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <button
      className="p-1 bg-gray-200 dark:bg-black rounded-full
    hover:bg-gray-300 dark:hover:bg-black transition-all duration-300
    hover:rotate-12
    "
      onClick={toggleDark}
    >
      <FiSun size={24} className="animate-pulse" />
    </button>
  );
}

export default DarkToggle;
