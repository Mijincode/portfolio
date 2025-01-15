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
            I’m Mijin, a junior full-stack web developer passionate about
            creating dynamic, user-friendly web applications. I thrive on
            learning new technologies and bringing ideas to life through code,
            whether it’s front-end design or back-end functionality. Eager to
            make a meaningful impact, I’m excited to dive into challenges and
            grow as a developer in every project I take on.
          </p>
        </div>
      </div>
    </section>
  );
}
