import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home" className="bg-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 ">
          Welcome to My Portfolio
        </h1>
        <p className="mb-8 leading-relaxed text-gray-600 text-center">
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
        <Link
          to="/Contact"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          contact me
        </Link>
      </div>
    </section>
  );
}
