import React from "react";
import Mijin from "./image/mijin1.png";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="lg:max-w-2xl lg:mx-auto flex flex-col items-center justify-center text-3xl font-bold mb-4 mt-10">
          Hello!
        </h1>
        <div className="flex flex-col items-center">
          <img
            src={Mijin}
            alt="Mijin Lee"
            className="rounded-full h-80 w-80 object-cover mb-4"
          />
          <p className="text-lg text-center text-700 p-4 rounded-lg shadow-md">
            I'm Mijin, a UI/UX Designer and Full-Stack Developer passionate
            about crafting visually engaging and user-friendly web experiences.
            With a strong foundation in design and development, I enjoy bringing
            ideas to life by focusing on aesthetics, functionality, and seamless
            user interactions. My experience in building responsive websites and
            intuitive interfaces allows me to create digital solutions that are
            both beautiful and efficient. Always eager to learn and grow, I
            strive to enhance user experiences through thoughtful design and
            clean, maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
}
