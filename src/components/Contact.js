import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Contact() {
  return (
    <div id="contact">
      {/* Add id attribute */}
      <Card>
        <Card.Header>Mijin Lee</Card.Header>
        <Card.Body>
          <Card.Title>Junior software developer</Card.Title>
          <Card.Text></Card.Text>
          <Card.Link href="mailto:mijindoig@hotmail.com">
            <AiOutlineMail /> Email
          </Card.Link>
          <Card.Link href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit">
            <AiFillLinkedin /> LinkedIn
          </Card.Link>
          <Card.Link href="https://github.com/Mijincode">
            <AiFillGithub /> GitHub
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
