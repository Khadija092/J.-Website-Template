import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Container2() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        padding: '20px 0',
      }}
    >
      <Container>
        <Row className="g-3 d-flex justify-content-center">
          <Col xs={12} md={4} className="d-flex flex-column justify-content-between">
            {/* First small image */}
            <div className="d-flex flex-column align-items-center mb-3">
              <img
                src="https://www.junaidjamshed.com/media/wysiwyg/W-26.jpg"
                alt="Small Product 1"
                style={{
                  width: '80%', // Reduced size
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <div
                style={{
                  marginTop: '5px',
                  textAlign: 'left', // Center text below the smaller image
                  width: '60%', // Align text width to match image width
                }}
              >
                <h3>KURTI</h3>
                <p style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                  <strong>Shop Now</strong>
                </p>
              </div>
            </div>

            {/* Second small image */}
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://www.junaidjamshed.com/media/wysiwyg/W-25.jpg"
                alt="Small Product 2"
                style={{
                  width: '80%', // Reduced size
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <div
                style={{
                  marginTop: '5px',
                  textAlign: 'left',
                  width: '60%', // Align text width to match image width
                }}
              >
                <h3>KURTI</h3>
                <p style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                  <strong>Shop Now</strong>
                </p>
              </div>
            </div>
          </Col>

          {/* Large Image in the first column */}
          <Col xs={12} md={7} className="d-flex flex-column align-items-center">
            <img
              src="https://www.junaidjamshed.com/media/wysiwyg/W-24.jpg"
              alt="Large Product"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '8px', // Optional for rounded corners
              }}
            />
            <div
              style={{
                marginTop: '10px',
                textAlign: 'left',
                width: '100%',
              }}
            >
              <h3>UNSTITCHED</h3>
              <p style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                <strong>Shop Now</strong>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Container2;
