import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { AiFillGithub } from "react-icons/ai";

const projects = {
  HappinessApp: {
    title: "Happiness App",
    videoSrc: "https://www.youtube.com/embed/U-Vrown8XYM",
    description:
      "React-based web application to allow users to view and analyse ‘happiness survey’ data drawn from a database.",
    githubUrl: "https://github.com/Mijincode/HappinessApp",
  },
  FlightRoutes: {
    title: "Flight Routes and Airports",
    videoSrc: "https://www.youtube.com/embed/n7On5x0mXxo",
    description:
      "A team project: Web page that allows a user to interact and perform filtering and analysis with aircraft databases(JSON).",
    githubUrl: "https://github.com/Mijincode/FlightRoutes",
  },
  MovieApp: {
    title: "Movie API",
    videoSrc: "https://www.youtube.com/embed/kMa4L73EOr8",
    description:
      "Node.js and express-based API, which allows client-side web applications to retrieve data drawn from an SQL database.",
    githubUrl: "https://github.com/Mijincode/MovieApp",
  },
  StyleSerenity: {
    title: "Style Serenity",
    videoSrc: "https://www.youtube.com/embed/fN1HkiEuzVA",
    description:
      "A fashion web application built using JavaScript, HTML, and CSS which offers a visually appealing and user-friendly interface for browsing and purchasing fashion items.",
    githubUrl: "https://github.com/Mijincode/StyleSerenity",
  },
};

export default function Projects() {
  const handleGithubClick = (githubUrl) => {
    window.open(githubUrl, "_blank");
  };

  const ProjectCard = ({ project }) => (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          title={`${project} Video`}
          className="w-full h-full object-cover"
          src={projects[project].videoSrc}
        />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <h4 className="text-lg font-semibold text-center mt-30">
          {projects[project].title}
        </h4>
        <button
          className="flex items-center bg-blue-500 text-white rounded-md px-4 py-2"
          onClick={() => handleGithubClick(projects[project].githubUrl)}
        >
          <AiFillGithub className="w-4 h-4 mr-2" />
          <ExternalLinkIcon className="w-4 h-4 ml-2" />
        </button>
        {/* </div> */}
      </div>
      <p className="text-gray-700">{projects[project].description}</p>
    </div>
  );

  return (
    <section id="projects">
      <header className="text-center">
        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
        </div>
      </header>
      <main className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
          {Object.keys(projects).map((project) => (
            <div key={project}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
