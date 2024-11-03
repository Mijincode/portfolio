import React from "react";
import { Card, Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  const handleGithubClick = (githubUrl) => {
    window.open(githubUrl, "_blank");
  };

  return (
    <Card className="border border-gray-200 rounded-lg">
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="text-lg font-semibold text-center">
          {project.title}
        </Card.Title>

        <div className="ifram-container">
          <iframe
            title={`${project} Video`}
            src={project.videoSrc}
            width="100%"
            height={"400"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Button
          variant="primary"
          className="d-flex align-items-center"
          onClick={() => handleGithubClick(project.githubUrl)}
        >
          <AiFillGithub className="w-4 h-4 mr-2" />
          View GitHub
        </Button>
        <Card.Text className="text-gray-700 mt-2">
          {project.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
