// src/components/Contact.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form validation and submission logic
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="my-4 text-center">Contact</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="form-control"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="form-control"
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Enter your message"
                className="form-control"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
