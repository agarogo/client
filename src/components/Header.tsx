"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { name: "Обо мне", path: "/about" },
    { name: "Достижения", path: "/achievements" },
    { name: "Презентация", path: "/presentation" },
    { name: "Тест", path: "/test" },
    { name: "Группа Т-24", path: "/group" },
    { name: "Контакты", path: "/contact" },
  ];

  return (
    <header className="bg-white py-4 px-32 flex justify-between items-center">
      <div
        onClick={() => handleLinkClick("/")}
        className="text-xl font-bold text-[#0A1044] mon cursor-pointer"
      >
        Валя
      </div>
      <div className="lg:flex space-x-6 hidden">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => handleLinkClick(link.path)}
            className="text-[#0A1044] hover:text-blue-800 text-base"
          >
            {link.name}
          </button>
        ))}
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg mt-2 p-4 rounded-lg absolute right-4 top-16 z-50 w-60 max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.path)}
                className="text-base p-2 rounded text-[#0A1044] hover:text-blue-800 text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
