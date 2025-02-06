import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Box1({ imgSrc }) {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={10}>
          <img
            src={imgSrc} // The image URL is now passed as a prop
            alt="Responsive Image"
            className="w-100"
            style={{
              height: 'auto', // Allow height to adjust based on the width
              width: '80%', // Image width is 80% of the container width
              objectFit: 'contain', // Ensure the whole image fits inside without cropping
              margin: '0 auto',
              display: 'block'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Box1;
