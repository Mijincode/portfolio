import React, { useState } from "react";

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
    <div className="card mb-4">
      <div className="aspect-w-16 aspect-h-15">
        <iframe
          title={`${project} Video`}
          className="w-full h-full"
          src={projectData[project].videoSrc}
          allowFullScreen
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">{projectData[project].title}</h4>
        <p>{projectData[project].description}</p>
        <button
          className="btn btn-primary"
          onClick={() => handleGithubClick(project)}
        >
          View GitHub
        </button>
      </div>
    </div>
  );

  return (
    <>
      <header className="text-center">
        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
          <p>
            HTML, CSS, and JavaScript, React, Node.js and Express-based API,
            MySQL
          </p>
        </div>
      </header>
      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(projectData).map((project) => (
            <div key={project}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
