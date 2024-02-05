import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Me</h1>
        <div className="max-w-md mx-auto">
          <p className="text-lg mb-4">
            <span className="text-gray-600">Email: </span>
            <a
              href="mailto:mijindoig@hotmail.com"
              className="text-indigo-600 hover:underline"
            >
              <AiOutlineMail className="inline-block" /> mijindoig@hotmail.com
            </a>
          </p>
          <p className="text-lg mb-4">
            <span className="text-gray-600">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
              className="text-indigo-600 hover:underline"
            >
              <AiFillLinkedin className="inline-block" /> LinkedIn Profile
            </a>
          </p>
          <p className="text-lg mb-4">
            <span className="text-gray-600">GitHub: </span>
            <a
              href="https://github.com/Mijincode"
              className="text-indigo-600 hover:underline"
            >
              <AiFillGithub className="inline-block" /> GitHub Profile
            </a>
          </p>
        </div>
        <Link
          to="/"
          className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
