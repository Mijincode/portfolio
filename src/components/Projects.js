import React, { useState } from "react";
import "../App.css";
import HappinessApp from "./happinessApp.gif"; // Import your image files
import Airport from "./Flight.gif";
import MovieApp from "./movieApp.gif"; // Corrected import name

export default function Projects() {
  const [showDetails, setShowDetails] = useState(null);

  const handleDetailsClick = (project) => {
    setShowDetails(project);
  };

  const projectDetails = {
    HappinessApp:
      "React-based web application to allow users to view and analyse ‘happiness survey’ data drawn from a database",
    FlightInformation:
      "Web page that allows a user to interact and perform filtering and analysis with aircraft databases. ",
    MovieApp:
      "Node.js and express-based API, which allows client-side web applications to retrieve data drawn from an SQL database.",
    StyleSerenity: "A fashion web application",
  };

  return (
    <>
      <header>
        <div>
          <h1 className="text-center">Projects</h1>
          <p className="text-center">
            HTML, CSS, and JavaScript, React, Node.js and Express-based API,
            MySQL
          </p>
        </div>
        <div>{/* Add your photo or avatar here */}</div>
      </header>
      <main className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <img
                src={HappinessApp}
                alt="A mobile phone with an app open showing the stock price of FB"
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title">HappinessApp</h4>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDetailsClick("HappinessApp");
                  }}
                >
                  View Details
                </a>
                {showDetails === "HappinessApp" && (
                  <div className="details">{projectDetails.HappinessApp}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <img
                src={Airport}
                alt="A laptop with the lid open. The screen shows a code editor with a JavaScript file open."
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title">Flight Information</h4>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDetailsClick("FlightInformation");
                  }}
                >
                  View Details
                </a>
                {showDetails === "FlightInformation" && (
                  <div className="details">
                    {projectDetails.FlightInformation}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <img
                src={MovieApp}
                alt="Node.js and Express-based API"
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title">Movie App</h4>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDetailsClick("MovieApp");
                  }}
                >
                  View Details
                </a>
                {showDetails === "MovieApp" && (
                  <div className="details">{projectDetails.MovieApp}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              {/* <img src={MovieApp} alt="React" className="card-img-top" /> */}
              <div className="card-body">
                <h4 className="card-title">Style Serenity</h4>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDetailsClick("StyleSerenity");
                  }}
                >
                  View Details
                </a>
                {showDetails === "StyleSerenity" && (
                  <div className="details">{projectDetails.StyleSerenity}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Add more rows with two projects each */}
      </main>
    </>
  );
}
