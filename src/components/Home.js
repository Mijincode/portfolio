import React from "react";
import Mijin from "./image/mijin1.png";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="container px-5 py-10 mx-auto">
        <div className="lg:max-w-2xl lg:mx-auto flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Hello!</h1>
          <div className="flex flex-col items-center">
            <img
              src={Mijin}
              alt="Mijin Lee"
              className="rounded-full h-80 w-80 object-cover mb-4"
            />
            <p className="text-lg text-center text-700 p-4 rounded-lg shadow-md">
              I'm Mijin. Seeking a position where I can contribute my skills to
              innovative solutions in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
