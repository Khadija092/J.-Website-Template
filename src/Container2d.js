import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Container2d() {
  return (
    <Container>
      <Row className="ms-5">
        {[
          {
            src: "https://www.junaidjamshed.com/media/catalog/product/2/4/24-1950_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
            alt: "Image 1",
          },
          {
            src: "https://www.junaidjamshed.com/media/catalog/product/2/4/24-1949_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
            alt: "Image 2",
          },
          {
            src: "https://www.junaidjamshed.com/media/catalog/product/2/4/24-1948_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
            alt: "Image 3",
          },
          {
            src: "https://www.junaidjamshed.com/media/catalog/product/j/k/jk2-24-5657_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
            alt: "Image 4",
          }
        ].map((item, index) => (
          <Col
            xs={6}
            md={2}
            className="d-flex flex-column justify-content-center align-items-start mb-3"
            key={index}
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: '300px', width: '200px', objectFit: 'cover' }}
            />
            <div
              style={{
                textAlign: 'left',
                marginTop: '10px',
                fontSize: '0.9rem',
              }}
            >
              <p style={{ margin: '0', fontWeight: 'normal' }}>
                PINK KHADDI EMBROIDERED 3PC
              </p>
              <p style={{ margin: '0', fontWeight: 'normal' }}>STITCHED</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <p
                style={{
                  margin: '0',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
              >
                PKR 3,592.00
              </p>
              <button
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                }}
              >
                20% OFF
              </button>
            </div>
            {/* New row with 5 smaller, left-aligned circular buttons */}
            <Row className="mt-3" style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Col>
                <button
                  style={{
                    borderRadius: '50%',
                    width: '25px',
                    height: '25px',
                    backgroundColor: '#ccc',
                    border: 'none',
                    fontSize: '0.6rem',
                    margin: '0 5px',
                  }}
                >
                  3 M
                </button>
                <button
                  style={{
                    borderRadius: '50%',
                    width: '25px',
                    height: '25px',
                    backgroundColor: '#ccc',
                    border: 'none',
                    fontSize: '0.6rem',
                    margin: '0 5px',
                  }}
                >
                  3-6
                </button>
                <button
                  style={{
                    borderRadius: '50%',
                    width: '25px',
                    height: '25px',
                    backgroundColor: '#ccc',
                    border: 'none',
                    fontSize: '0.6rem',
                    margin: '0 5px',
                  }}
                >
                  6-9
                </button>
                <button
                  style={{
                    borderRadius: '50%',
                    width: '25px',
                    height: '25px',
                    backgroundColor: '#ccc',
                    border: 'none',
                    fontSize: '0.6rem',
                    margin: '0 5px',
                  }}
                >
                  9-12
                </button>
                <button
                  style={{
                    borderRadius: '50%',
                    width: '25px',
                    height: '25px',
                    backgroundColor: '#ccc',
                    border: 'none',
                    fontSize: '0.6rem',
                    margin: '0 5px',
                  }}
                >
                  12+
                </button>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Container2d;
