import Logo from "../assets/apple.svg?react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import DarkToggle from "@components/DarkToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchEnable, setIsSearchEnable] = useState(false);

  return (
    <nav
      className="flex items-center justify-between px-4 h-16   sticky top-0 z-50 
    bg-apple-light dark:bg-apple-dark
    shadow-apple-md
    backdrop-blur-md"
    >
      <a href="#" className="text-xl font-bold">
        <Logo className="w-6 h-6 hover:scale-105 transition-transform dark:fill-white" />
      </a>
      <div
        className="gap-6 hidden md:flex mx-auto 
      text-apple-text-light dark:text-apple-text-dark"
      >
        <a href="#">Shop</a>
        <a href="#">Mac</a>
        <a href="#">iPad</a>
        <a href="#">iPhone</a>
        <a href="#">Watch</a>
        <a href="#">Help</a>
      </div>
      {isSearchEnable && (
        <div className="relative">
          <input className="peer border border-gray-300 px-4 py-2 w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          <label
            className="absolute left-2 top-2
            peer-focus:-top-2
            peer-focus:text-xs
            peer-focus:text-blue-500
            transition
            dark:text-white
          "
          >
            Search
          </label>
        </div>
      )}
      <div className="gap-2 dark:text-white space-x-2">
        <button onClick={() => setIsSearchEnable(!isSearchEnable)}>
          <AiOutlineSearch size={24} />
        </button>
        <DarkToggle />
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <AiOutlineMenu size={24} />
        </button>
      </div>
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64
        ${!isOpen && "hidden"}
        `}
      >
        <div className="flex flex-col mt-17 space-y-6 bg-white dark:bg-black/70 text-center p-6 rounded-lg dark:text-white">
          <a href="#">Shop</a>
          <a href="#">Mac</a>
          <a href="#">iPad</a>
          <a href="#">iPhone</a>
          <a href="#">Watch</a>
          <a href="#">Help</a>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};
export default Header;
