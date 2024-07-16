import React from "react";
import ProjectCard from "./ProjectCard";

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
  StudyPlan: {
    title: "Learning Management System - Study Plan App",
    videoSrc: "https://youtube.com/embed/uyfyD-qJjLU",
    description:
      "A Learning Management System designed for students to plan their learning. It integrates APIs that enable real-time course search, interactive course management, and personalized study plans tailored to user preferences.",
    githubUrl: "https://github.com/Mijincode/StudyPlanApp",
  },
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-20">
          {Object.keys(projects).map((projectKey) => (
            <ProjectCard key={projectKey} project={projects[projectKey]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
