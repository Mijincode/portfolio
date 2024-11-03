import React from "react";
import ProjectCard from "./ProjectCard";

const projects = {
  HappinessApp: {
    title: "Happiness Ranking",
    videoSrc: "https://www.youtube.com/embed/U-Vrown8XYM",
    description:
      "A React-based web application for analyzing happiness survey data, enabling users to filter and visualize information across demographics. Integrated with a backend database for real-time data access, implemented responsive design for mobile compatibility, and utilized RESTful API calls and data visualization libraries to enhance user experience.,",
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
    title: "Movie Search",
    videoSrc: "https://www.youtube.com/embed/kMa4L73EOr8",
    description:
      "The Movie Database API is a web application that allows users to register, log in, search for movies by title and year, and manage movie posters. It features secure user authentication with JWT, retrieves movie details using IMDb IDs, and supports file uploads for movie posters. Built with HTML, CSS, and JavaScript for the frontend, and Node.js, Express.js, SQLite, and Multer for the backend.",

    githubUrl: "https://github.com/Mijincode/MovieApp",
  },
  StyleSerenity: {
    title: "Style Serenity",
    videoSrc: "https://www.youtube.com/embed/fN1HkiEuzVA",
    description:
      "This is a responsive fashion e-commerce front-end web application designed for a seamless shopping experience. Developed with HTML, CSS, JavaScript, Bootstrap, and Font Awesome, this project showcases my front-end development skills and focus on user experience designs.",
    githubUrl: "https://github.com/Mijincode/StyleSerenity",
  },
  StudyPlan: {
    title: "Learning Management System",
    videoSrc: "https://youtube.com/embed/Ub5G4wQfq_M",
    description:
      " This is a Learning Management System (LMS) web application for Future Leaders Network, enhancing educational experiences through interactive tools. As part of a collaborative team, I focused on the front-end development, building the student page and creating course materials. The LMS integrates custom-built APIs for real-time course search, interactive course management, and personalized study plans tailored to user preferences. Utilizing JavaScript, React, and CSS.  A key feature includes a responsive timetable planner with clash detection and progress tracking, improving academic scheduling and monitoring for users. ",
    githubUrl: "https://github.com/Mijincode/StudyPlanApp",
  },

  ChaeumMi: {
    title: "Chaeu-mi",
    videoSrc: "https://youtube.com/embed/RF6Afvejid0",
    webPage: "https://chaeul-mi.com/",
    description:
      "This is a beauty tattoo web application for my client in South Korea to enhance customer engagement and operational efficiency. Implemented a booking feature using Node.js and Express, allowing clients to select service dates and receive automated confirmation texts via Twilio. Integrated Google Maps API for easy navigation to the shop and utilized React for a responsive user experience across devices. Added internationalization (i18n) for multi-language support, improving accessibility for diverse clientele.",
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
