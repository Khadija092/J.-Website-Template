import React from 'react';
 import Sidebar from './Sidebar';
 import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IMAGE3 from './IMAGE3'
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <Container fluid>
      <Row className="bg-light">
        <Col xs={12} md={3} className="p-3">
          <Sidebar />
        </Col>
        <Col xs={12} md={9}>
        
        <Link to="/new-arrivals/path2/path3" className="navbar-brand">

        <IMAGE3 
            imgSrc1="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3248_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
            imgSrc2="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3247_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
            imgSrc3="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3248_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
          />
            </Link>
         
          <IMAGE3 
            imgSrc1="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3248_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
            imgSrc2="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3248_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
            imgSrc3="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3248_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
          />
          <IMAGE3 
            imgSrc1="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3248_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
            imgSrc2="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3247_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
            imgSrc3="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3248_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
          />
          <IMAGE3 
            imgSrc1="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3248_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
            imgSrc2="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3248_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
            imgSrc3="https://www.junaidjamshed.com/media/catalog/product/2/5/25-3248_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
          />
        </Col>
      </Row>
    </Container>

   


    
  );
};

export default Page1;
