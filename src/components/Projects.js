import React, { useState } from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const projectData = {
  HappinessApp: {
    title: "HappinessApp",
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
  const [githubUrls] = useState(projectData);

  const handleGithubClick = (project) => {
    window.open(githubUrls[project].githubUrl, "_blank");
  };

  const ProjectCard = ({ project }) => (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          title={`${project} Video`}
          className="w-full h-full"
          src={projectData[project].videoSrc}
          allowFullScreen
        />
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-center mt-0">
          {projectData[project].title}
        </h4>
        <p className="text-gray-700">{projectData[project].description}</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center"
          onClick={() => handleGithubClick(project)}
        >
          View GitHub
          <ExternalLinkIcon className="w-4 h-4 ml-2" />
        </button>
      </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(projectData).map((project) => (
            <div key={project}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
