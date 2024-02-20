import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 h-16 grid" style={{ marginBottom: "25px" }}>
      <nav className="container mx-auto flex items-center justify-between">
        <a href="#home" className="text-white text-xl font-bold">
          Mijin's Portfolio
        </a>
        <div className="flex text-center">
          <a href="#home" className="text-white px-3 py-2">
            Home
          </a>
          <a href="#about" className="text-white px-3 py-2">
            About
          </a>
          <a href="#skills" className="text-white px-3 py-2">
            Skills
          </a>
          <a href="#projects" className="text-white px-3 py-2">
            Projects
          </a>
          <a href="#contact" className="text-white px-3 py-2">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
