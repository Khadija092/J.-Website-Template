import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Container2a() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col xs="auto">
          <img 
            src="https://www.junaidjamshed.com/media/wysiwyg/banner_29.jpg" alt="Description of the image" 
            style={{ width: '98%', height:'350px' , display: 'block', margin: '0 auto' }} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Container2a;
