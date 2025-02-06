import React from 'react';
 import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexbox from './flexbox';
import Flexboxdata from './flexboxdata';
import Slider2 from './Slider2';


const Page2 = () => {
  return (
   
    <Container>
    <Row className="d-flex justify-content-between">
  {/* Flexbox Component */}
  <Col xs={12} md={6} className="d-flex justify-content-center">
    <Flexbox
      largeimg="https://www.junaidjamshed.com/media/catalog/product/2/4/24-1703_2_.jpg"
      smallimg1="https://www.junaidjamshed.com/media/catalog/product/2/4/24-1703_2_.jpg"
      smallimg2="https://www.junaidjamshed.com/media/catalog/product/2/4/24-1703_3_.jpg"
      smallimg3="https://www.junaidjamshed.com/media/catalog/product/2/4/24-1703_1_.jpg"
    />
  </Col>

  {/* Flexboxdata Component */}
  <Col xs={12} md={6} className="d-flex flex-column justify-content-start">
    <Flexboxdata />
  </Col>
</Row>
<br></br>
<Row>
    <Col>
    <Slider2></Slider2>
    </Col>
</Row>
  </Container>

    
    


    
  );
};

export default Page2;
