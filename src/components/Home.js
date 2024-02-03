import React from "react";

export default function Home() {
  return (
    <section id="home">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 leading-relaxed">
            Hi, I'm a junior web developer.
          </p>
        </div>
      </div>
    </section>
  );
}
