import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white ">
      <Container fluid className="text-center my-4">
      
      <Link to="/" >

      <img
          src="https://www.junaidjamshed.com/media/logo/stores/1/new_logo.png"
          alt="Junaid Jamshed Logo"
          className="mx-auto w-8 md:w-10 lg:w-15"
        />
              
      </Link>
       
      </Container>
    </header>
  );
}

export default Header;
