import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
      <Row>
        {/* NEED HELP Section */}
        <Col xs={12} md={4} lg={4} xl={4} style={{ height: '300px'}}>
          <br />
          <h4 style={{ textAlign: 'center' }}>NEED HELP?</h4>
          <br />
          <p style={{ textAlign: 'center' }}>
            +92 21 111 112 111 (9am - 10pm, Mon - Sat)
            <br />
            eshop@junaidjamshed.com
          </p>
        </Col>

        {/* CUSTOMER SERVICE Section */}
        <Col xs={12} md={3} lg={3} xl={3} style={{ height: '300px' }}>
          <br />
          <h4 style={{ textAlign: 'center' }}>CUSTOMER SERVICE</h4>
          <br />
          <ul style={{ listStyleType: 'none', paddingLeft: '0', textAlign: 'center' }}>
            <li>Contact Us</li>
            <li>Delivery & Orders</li>
            <li>Returns & Exchanges</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Track My Order</li>
            <li>Payment Guide</li>
          </ul>
        </Col>

        {/* COMPANY Section */}
        <Col xs={12} md={2} lg={2} xl={2} style={{ height: '300px' }}>
          <br />
          <h4 style={{ textAlign: 'center' }}>COMPANY</h4>
          <br />
          <ul style={{ listStyleType: 'none', paddingLeft: '0', textAlign: 'center' }}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Store Addresses</li>
          </ul>
        </Col>

        {/* Follow US Section */}
        <Col xs={12} md={3} lg={3} xl={3} style={{ height: '300px' }}>
          <br />
          <h4 style={{ textAlign: 'center' }}>Follow US</h4>
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
