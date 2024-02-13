import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Mijin, a passionate full-stack developer specializing in both
          front-end and back-end technologies. I invite you to explore my
          projects, skills, and experiences in web development. Whether you're a
          potential employer, collaborator, or simply curious, feel free to
          browse through my work and get in touch! On the front-end, I have
          expertise in HTML, CSS, JavaScript, and various frameworks like React.
          For back-end development, I'm proficient in languages such as Node.js
          and Express, as well as databases like MySQL. I'm excited to share my
          journey in software development with you.
        </p>
        <Link to="/contact" className="contact-btn">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
