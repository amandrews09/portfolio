// src/components/Project.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={`${title} screenshot`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" href={deployedLink} target="_blank" className="m-1">
          Live App
        </Button>
        <Button variant="secondary" href={githubLink} target="_blank" className="m-1">
          GitHub Repo
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Project;
