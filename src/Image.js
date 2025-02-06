import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ImageTextGrid() {
  return (
    <Container fluid>
      <Row>
        {/* Empty column for spacing on the left */}
        <Col xs={2} md={2} lg={2} xl={2}></Col>

        {/* First column with one image and text */}
        <Col xs={5} md={5} lg={5} xl={5} className="text-center">
          <img
            className="img-fluid"
            src="https://www.junaidjamshed.com/media/wysiwyg/scs1.jpg"
            alt="Unstitched"
          />
          <br />
          UnSTITCHED <br />
          <b>Shop now</b> <br />
        </Col>

        {/* Second column with two stacked images and text */}
        <Col>
          <div className="text-center">
            <img
              style={{ height: '280px', objectFit: 'cover' }}
              className="img-fluid"
              src="https://www.junaidjamshed.com/media/wysiwyg/scs3.jpg"
              alt="Kurti 1"
            />
            <br />
            Kurti <br />
            <b>Shop now</b> <br />
          </div>
          <br />
          <div className="text-center">
            <img
              style={{ height: '280px', objectFit: 'cover' }}
              className="img-fluid"
              src="https://www.junaidjamshed.com/media/wysiwyg/scs2.jpg"
              alt="Kurti 2"
            />
            <br />
            Kurti <br />
            <b>Shop now</b> <br />
          </div>
        </Col>

        {/* Empty column for spacing on the right */}
        <Col xs={2} md={2} lg={2} xl={2}></Col>
      </Row>
    </Container>
  );
}

export default ImageTextGrid;
