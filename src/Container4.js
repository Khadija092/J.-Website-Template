import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Container4() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: 'auto' }} // This makes the container take the full height of the viewport
    >
      <Row className="w-100"> {/* Make sure the row spans the full width */}
        {/* Empty column for spacing on the left */}
        <Col xs={1} md={1} lg={1} xl={1}></Col>

        {/* Main content column */}
        <Col
          xs={10}
          md={10}
          lg={10}
          xl={10}
          className="bg-warning d-flex justify-content-center align-items-center"
          style={{ height: '400px' }}
        >
          <Col
            xs={11}
            md={11}
            lg={11}
            xl={11}
            className="bg-primary"
            style={{ height: '300px' }}
          >
            <img
              className="img-fluid"
              src="https://www.junaidjamshed.com/media/wysiwyg/grooms-1.jpg"
              alt="Banner"
              style={{ height: '300px', width: '100%' }}
            />
          </Col>
        </Col>

        {/* Empty column for spacing on the right */}
        <Col xs={1} md={1} lg={1} xl={1}></Col>
      </Row>
    </Container>
  );
}

export default Container4;
