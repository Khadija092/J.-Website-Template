import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Container3b() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Row className="justify-content-center align-items-center g-3">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/UNStitched.jpg"
            alt="First Image"
            style={{
              width: '550px',  // Set width to 400px
              height: '500px', // Set height to 600px
              objectFit: 'cover',
            }}
          />
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/FW24.jpg"
            alt="Second Image"
            style={{
              width: '550px',  // Set width to 400px
              height: '500px', // Set height to 600px
              objectFit: 'cover',
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Container3b;
