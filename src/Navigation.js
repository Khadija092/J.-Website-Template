import React from 'react'
import { Link, link , Outlet, outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Navigation() {
  return (
    <div>
    <>
   {[false].map((expand) => (
     <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
       <Container fluid>
        
         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
         <Navbar.Brand href="#">Barouque</Navbar.Brand>
         <Navbar.Offcanvas
           id={`offcanvasNavbar-expand-${expand}`}
           aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
           placement="start"
         >
           <Offcanvas.Header closeButton>
             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
               Offcanvas
             </Offcanvas.Title>
           </Offcanvas.Header>
           <Offcanvas.Body>
             <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/">Home</Link>
              <Link to="/Newarrival">New Arrivals</Link>
              <Link to="/service">Service</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/sample">Sample</Link>
              <Link to="/crud">Crud App</Link>
              <Link to="/testcontext">Test Context</Link>
              <Link to="/inputfocus">Use Ref</Link>
              <Link to="/sampletahir">Sample Tahir</Link>
              <Link to="/usecallback">UseCallBack</Link>
              <Link to="/usememo">UseMemo</Link>
             
               <NavDropdown
                 title="Dropdown"
                 id={`offcanvasNavbarDropdown-expand-${expand}`}
               >
                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                 <NavDropdown.Item href="#action4">
                   Another action
                 </NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action5">
                   Something else here
                 </NavDropdown.Item>
               </NavDropdown>
             </Nav>
             <Form className="d-flex">
               <Form.Control
                 type="search"
                 placeholder="Search"
                 className="me-2"
                 aria-label="Search"
               />
               <Button variant="outline-success">Search</Button>
             </Form>
           </Offcanvas.Body>
         </Navbar.Offcanvas>
       </Container>
     </Navbar>
   ))}
 </>
 <Outlet/>
 </div>
  )
}

export default Navigation
