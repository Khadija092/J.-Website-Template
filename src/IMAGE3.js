import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function IMAGE3({ imgSrc1, imgSrc2, imgSrc3 }) {
  return (
    <Container className="mt-4">
      <Row>
        {/* First Column */}
        <Col  md={4} className="text-center">
          <div className="border p-3 h-[600px]">
            <img
              src={imgSrc1} // Use imgSrc1 prop
              alt="Placeholder 1"
              className="img-fluid"
              style={{ width: '100%',height:'400px', objectFit: 'contain' }}
            />
            <p className='mb-0'>Multicolor Lawn Printed Unstitched 3PC | 25-3248</p>
            <h4 className="text-left font-bold p-2 mb-0">PKR 4,890.00</h4>
            <div className="flex justify-start p-2">
              <button className="border-2 border-black w-[120px] h-[40px]">ADD TO BAG</button>
            </div>
          </div>
        </Col>

        {/* Second Column */}
        <Col md={4} className="text-center">
          <div className="border p-3 h-[600px]">
            <img
              src={imgSrc2} // Use imgSrc2 prop
              alt="Placeholder 2"
              className="img-fluid"
              style={{ width: '100%',height:'400px', objectFit: 'contain' }}
            />
            <p className='mb-0'>Multicolor Lawn Printed Unstitched 3PC | 25-3248</p>
            <h4 className="text-left font-bold p-2 mb-0">PKR 4,890.00</h4>
            <div className="flex justify-start p-2">
              <button className="border-2 border-black w-[120px] h-[40px]">ADD TO BAG</button>
            </div>
          </div>
        </Col>

        {/* Third Column */}
        <Col md={4} className="text-center">
          <div className="border p-3 h-[600px]">
            <img
              src={imgSrc3} // Use imgSrc3 prop
              alt="Placeholder 3"
              className="img-fluid"
              style={{ width: '100%',height:'400px', objectFit: 'contain' }}
            />
            <p className='mb-0'>Multicolor Lawn Printed Unstitched 3PC | 25-3248</p>
            <h4 className="text-left font-bold p-2 mb-0">PKR 4,890.00</h4>
            <div className="flex justify-start p-2">
              <button className="border-2 border-black w-[120px] h-[40px]">ADD TO BAG</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default IMAGE3;
