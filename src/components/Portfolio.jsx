// src/components/Portfolio.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './Project';
import projectData from './ProjectData';

const Portfolio = () => {
  return (
    <Container>
      <h2 className="my-4 text-center">Portfolio</h2>
      <Row>
        {projectData.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Project
              title={project.title}
              image={project.image}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
