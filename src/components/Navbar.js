import React, { useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeNavbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScroll(true);
  //     } else {
  //       setScroll(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    // <header className={` ${scroll ? "sticky" : ""}`}>
    <header className={scroll ? "sticky" : ""}>
      <nav className="container mx-auto flex justify-between items-center">
        {/* <nav className="container mx-auto"> */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={() => scrollToSection("home")}
        >
          Mijin's Portfolio
        </a>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>

        <div className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <a
            href="#home"
            className="nav-link"
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
          <a
            href="#skills"
            className="nav-link"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="nav-link"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
