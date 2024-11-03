import React from "react";
import ProjectCard from "./ProjectCard";

const projects = {
  HappinessApp: {
    title: "Happiness App",
    videoSrc: "https://www.youtube.com/embed/U-Vrown8XYM",
    description:
      "Developed a dynamic React-based web application that enables users to view, filter, and analyze data from a comprehensive happiness survey. The application integrates with a backend database to pull and visualize survey data, allowing users to explore various factors affecting happiness across different demographics. Implemented responsive design for seamless access across devices and used modern web development practices, including RESTful API calls and data visualization libraries o enhance user experience and data comprehension.",
    githubUrl: "https://github.com/Mijincode/HappinessApp",
  },
  FlightRoutes: {
    title: "Flight Routes and Airports",
    videoSrc: "https://www.youtube.com/embed/n7On5x0mXxo",
    description:
      "This interactive platform allows users to explore flight routes and airport information across Australia. It features a flight search function that filters by source, destination, airline, and aircraft, along with a lookup for airport details by name or city. The application updates dynamically with real-time data fetching and is built using HTML, CSS, and JavaScript, utilizing JSON for data management.",
    githubUrl: "https://github.com/Mijincode/FlightRoutes",
  },
  MovieApp: {
    title: "Movie Web Applicaion",
    videoSrc: "https://www.youtube.com/embed/kMa4L73EOr8",
    description:
      "The Movie Database API is a web application that allows users to register, log in, search for movies by title and year, and manage movie posters. It features secure user authentication with JWT, retrieves movie details using IMDb IDs, and supports file uploads for movie posters. Built with HTML, CSS, and JavaScript for the frontend, and Node.js, Express.js, SQLite, and Multer for the backend, this project faced challenges in implementing secure authentication and efficient file handling.",

    githubUrl: "https://github.com/Mijincode/MovieApp",
  },
  StyleSerenity: {
    title: "Style Serenity",
    videoSrc: "https://www.youtube.com/embed/fN1HkiEuzVA",
    description:
      "This is a responsive fashion e-commerce front-end web application designed for a seamless shopping experience. Users can explore various product categories like Dresses, Tops, and Shoes, all presented in a dynamic, mobile-friendly layout using Bootstrap. Key features include a product carousel for showcasing featured items, easy navigation through categories, trending items to drive sales, and streamlined search and cart functionalities. Developed with HTML, CSS, JavaScript, Bootstrap, and Font Awesome, this project showcases my front-end development skills and focus on user experience designs.",
    githubUrl: "https://github.com/Mijincode/StyleSerenity",
  },
  StudyPlan: {
    title: "Learning Management System - Study Plan App",
    videoSrc: "https://youtube.com/embed/uyfyD-qJjLU",
    description:
      "Designed, developed, and deployed a Learning Management System (LMS) web application for Future Leaders Network, enhancing educational experiences through interactive tools. As part of a collaborative team, I focused on the front-end development, building the student page and creating course materials. The LMS integrates custom-built APIs for real-time course search, interactive course management, and personalized study plans tailored to user preferences. Utilizing JavaScript, React, and CSS, I created responsive user interfaces and engaging visual elements to ensure a seamless user experience across devices.  A key feature I developed was the Study Plan Page, which includes a responsive timetable planner with clash detection and progress tracking, improving academic scheduling and monitoring for users. ",
    githubUrl: "https://github.com/Mijincode/StudyPlanApp",
  },
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8  mt-10">Projects</h2>
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
