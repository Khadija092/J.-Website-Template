import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Container2e() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Row className="justify-content-center align-items-center g-3">
        <Col xs={12} md={4} className="d-flex flex-column align-items-center position-relative">
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/W-C-5.jpg"
            alt="First Image"
            style={{
              width: '380px', // Set width to 380px
              height: '500px', // Set height to 500px
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '10px 20px',
              borderRadius: '0px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            1PC UNSTITCHED
          </div>
        </Col>

        <Col xs={12} md={4} className="d-flex flex-column align-items-center position-relative">
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/W-C-7.jpg"
            alt="Second Image"
            style={{
              width: '380px', // Set width to 380px
              height: '500px', // Set height to 500px
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '10px 20px',
              borderRadius: '0px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            2PC UNSTITCHED
          </div>
        </Col>

        <Col xs={12} md={4} className="d-flex flex-column align-items-center position-relative">
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/W-C-9.jpg"
            alt="Third Image"
            style={{
              width: '380px', // Set width to 380px
              height: '500px', // Set height to 500px
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '10px 20px',
              borderRadius: '0px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            3PC UNSTITCHED
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Container2e;
