import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Container5() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
      <Col
        xs={11}
        md={11}
        lg={11}
        xl={11}
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ backgroundColor: 'black', height: '250px' }}
      >
        {/* First Row: Title */}
        <Row className="d-flex justify-content-center align-items-center" style={{ height: '80px' }}>
          <Col className="text-center">
            <p style={{ fontSize: '25px', color: 'white' }}>BE THE FIRST</p>
          </Col>
        </Row>

        {/* Second Row: Description */}
        <Row className="d-flex justify-content-center align-items-center flex-column" style={{ height: '80px' }}>
          <Col className="text-center">
            <p style={{ fontSize: '18px', color: 'white' }}>
              New arrivals. Exclusive previews. First access to <br /> sales. Sign up to stay in the know.
            </p>
          </Col>
        </Row>

        {/* Third Row: Input and Buttons */}
        <Row className="d-flex justify-content-center align-items-center" style={{ height: '80px' }}>
          <Col xs="auto" className="d-flex justify-content-center align-items-center">
            <Button
              style={{ backgroundColor: 'white', height: '50px', width: '250px', color: 'grey', border: 'none' }}
            >
              Enter Your Email Address
            </Button>
            &nbsp;
            <Button
              style={{
                backgroundColor: 'black',
                height: '50px',
                width: '100px',
                color: 'white',
                border: '2px solid white',
              }}
            >
              Sign UP
            </Button>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Container5;
