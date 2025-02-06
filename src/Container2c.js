import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Container2b() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Row className="justify-content-center align-items-center g-3">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/stitched_63.jpg"
            alt="First Image"
            style={{
              width: '578px',  // Set width to 400px
              height: '600px', // Set height to 600px
              objectFit: 'cover',
            }}
          />
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/W-C-15.jpg"
            alt="Second Image"
            style={{
              width: '578px',  // Set width to 400px
              height: '600px', // Set height to 600px
              objectFit: 'cover',
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Container2b;
