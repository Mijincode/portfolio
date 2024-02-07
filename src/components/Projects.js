import React, { useState } from "react";

export default function Projects() {
  const [githubUrls] = useState({
    HappinessApp: "https://github.com/Mijincode/HappinessApp",
    FlightRoutes: "https://github.com/Mijincode/FlightRoutes",
    MovieApp: "https://github.com/Mijincode/MovieApp",
    StyleSerenity: "https://github.com/Mijincode/StyleSerenity",
  });

  const handleGithubClick = (project) => {
    window.open(githubUrls[project], "_blank");
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
      </header>
      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="card mb-4">
              <div className="aspect-w-16 aspect-h-15">
                <iframe
                  title="HappinessApp Video"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/U-Vrown8XYM"
                  allowFullScreen
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">HappinessApp</h4>
                <p>
                  React-based web application to allow users to view and analyse
                  ‘happiness survey’ data drawn from a database.
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => handleGithubClick("HappinessApp")}
                >
                  View GitHub
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="card mb-4">
              <div className="aspect-w-16 aspect-h-15">
                <iframe
                  title="Flight Routes and Airports Video"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/n7On5x0mXxo"
                  allowFullScreen
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Flight Routes and Airports</h4>
                <p>
                  A team project: Web page that allows a user to interact and
                  perform filtering and analysis with aircraft databases(JSON).
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleGithubClick("FlightRoutes")}
                >
                  View GitHub
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="card mb-4">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  title="Movie Video"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/kMa4L73EOr8"
                  allowFullScreen
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Movie API</h4>
                <p>
                  Node.js and express-based API, which allows client-side web
                  applications to retrieve data drawn from an SQL database.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleGithubClick("MovieApp")}
                >
                  View GitHub
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="card mb-4">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  title="Style Serenity"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/fN1HkiEuzVA"
                  allowFullScreen
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Style Serenity</h4>
                <p>
                  A fashion web application built using JavaScript, HTML, and
                  CSS which offers a visually appealing and user-friendly
                  interface for browsing and purchasing fashion items.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleGithubClick("StyleSerenity")}
                >
                  View GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
