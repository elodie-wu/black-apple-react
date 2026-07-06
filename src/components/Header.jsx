import Logo from "../assets/apple.svg?react";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 h-16 shadow-md sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <a href="#" className="text-xl font-bold">
        <Logo className="w-6 h-6 hover:scale-105 transition-transform" />
      </a>
      <div className="gap-6 hidden md:flex mx-auto">
        <a href="#">Products</a>
        <a href="#">Mac</a>
        <a href="#">iPad</a>
        <a href="#">iPhone</a>
        <a href="#">Watch</a>
        <a href="#">AirPods</a>
      </div>
      <button className="md:hidden" onClick={() => setIsOpen(true)}>
        <AiOutlineMenu size={24} />
      </button>
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64
        ${!isOpen && "hidden"}
        `}
      >
        <div className="flex flex-col mt-17 space-y-6 bg-white text-center p-6 rounded-lg">
          <a href="#">Products</a>
          <a href="#">Mac</a>
          <a href="#">iPad</a>
          <a href="#">iPhone</a>
          <a href="#">Watch</a>
          <a href="#">AirPods</a>
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
