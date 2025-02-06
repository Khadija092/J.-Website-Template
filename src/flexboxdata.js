import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Flexboxdata() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const items = [
    {
      id: 1,
      img: "https://baroque.pk/cdn/shop/files/95_5cf61249-b425-4784-9840-5e1c13058fba.jpg?v=1727772400&width=1000",
      name: "Embroidered Velvet Shawl",
      price: "PKR 19,990.00",
    },
    {
      id: 2,
      img: "https://baroque.pk/cdn/shop/files/93_73698153-d24a-4cb3-89f2-c3a7c9cc3577.jpg?v=1727772808&width=1000",
      name: "Embroidered Velvet Shawl",
      price: "PKR 19,990.00",
    },
    {
      id: 3,
      img: "https://baroque.pk/cdn/shop/files/69_c21788d0-3263-46c3-9342-7b9073cd52f8.jpg?v=1727772896&width=1000",
      name: "Embroidered Velvet Shawl",
      price: "PKR 19,990.00",
    },
  ];

  return (
    <Container>
      {/* Row 1: Title */}
      <Row>
        <Col className="text-start" style={{ fontSize: 'xx-large', color: 'black' }}>
          MULTICOLOR CAMBRIC PRINTED UNSTITCHED 3PC
        </Col>
      </Row>

      {/* Row 2: SKU */}
      <Row>
        <Col className="text-start" style={{ fontSize: 'medium', color: 'gray' }}>
          SKU#10000080093
        </Col>
      </Row>

      {/* Row 3: Stock Status */}
      <Row>
        <Col className="text-start" style={{ fontSize: 'medium', color: 'gray', fontWeight: 'bold' }}>
          In stock
        </Col>
      </Row>

      {/* Row 4: Review */}
      <Row>
        <Col className="text-start" style={{ fontSize: 'small', textDecoration: 'underline' }}>
          Be the first to review this product
        </Col>
      </Row>

      {/* Row 5: Price */}
      <Row className="my-2">
        <Col className="text-start" style={{ fontSize: 'xx-large', fontWeight: 'bold', color: 'black' }}>
          PKR 3,912.00 <span style={{ textDecoration: 'line-through', color: 'gray' }}>PKR 4,890.00</span>
        </Col>
      </Row>

      <hr></hr>

      {/* Row 6: Spacer */}
      <Row className="my-2" />

      {/* Row 7: Limited Stock Alert */}
      <Row className="align-items-center mb-2">
        <Col xs="auto">
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: 'green',
              borderRadius: '50%',
            }}
          ></div>
        </Col>
        <Col className="text-start">
          <span style={{ fontSize: 'medium', color: 'gray' }}>
            Limited Stock Alert: Get Yours Before They're Gone!
          </span>
        </Col>
      </Row>
      <br></br>

      {/* Row 8: Add to Bag Button */}
      <Row className="mb-3">
        <Col className="text-start">
          <Button
            variant="dark"
            onClick={toggleCart}
            style={{
              fontSize: 'medium',
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: 'black',
              border: '2px solid black',
              height: '50px',
              width: '300px',
              borderRadius: '0px',
            }}
          >
            ADD TO BAG
          </Button>
        </Col>
      </Row>

      {/* Row 9: Basic Description */}
      <Row>
        <Col className="text-start" style={{ fontSize: 'small', fontWeight: 'bold', textDecoration: 'underline', color: 'gray' }}>
          Basic 3 Piece
        </Col>
      </Row>

      {/* Row 10-12: Fabric Details */}
      <Row>
        <Col className="text-start" style={{ fontSize: 'medium', color: 'gray' }}>
          Digital Printed Cambric Shirt: 1.92 Meters
        </Col>
      </Row>
      <Row>
        <Col className="text-start" style={{ fontSize: 'medium', color: 'gray' }}>
          Digital Printed Cambric Dupatta: 2.5 Meters
        </Col>
      </Row>
      <Row>
        <Col className="text-start" style={{ fontSize: 'medium', color: 'gray' }}>
          Cambric Trouser: 2.5 Meters
        </Col>
      </Row>

      {/* Row 13: Disclaimer */}
      <Row>
        <Col className="text-start" style={{ fontSize: 'medium', color: 'gray' }}>
          * The stitch style and decorative accessories featured in the dress are for illustrative 
        </Col>
      </Row>
      <Row>
        <Col className="text-start" style={{ fontSize: 'medium', color: 'gray' }}>
          purposes only and are not included as part of the product.
        </Col>
      </Row>

      <Row className="mt-3 mb-0">
        <Col>
          <aside className="border-r border-gray-300 p-4 bg-white">
            <div>
              <div className="mb-4 border-b border-gray-300">
                <hr />
                <select className="w-full" style={{ fontWeight: 'bold' }}>
                  <option>Color Family</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              <div className="mb-4 border-b border-gray-300">
                <select className="w-full" style={{ fontWeight: 'bold' }}>
                  <option>Season</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            </div>
          </aside>
        </Col>
      </Row>

      {/* Cart Container */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <h2 className="text-lg font-bold">My Bag</h2>
            <button onClick={toggleCart} className="text-gray-500 text-xl">
              &times;
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex p-4 border-b">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <p className="text-sm font-bold mb-1">{item.name}</p>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    {item.price}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded">
                      <button className="px-2">-</button>
                      <span className="px-4">1</span>
                      <button className="px-2">+</button>
                    </div>
                    <button className="text-sm text-red-500 underline">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-4 border-t">
            <div className="text-sm text-gray-500 mb-2">
              Taxes and shipping calculated at checkout
            </div>
            <button className="w-full bg-black text-white py-2 rounded">
              Checkout - PKR 59,970.00
            </button>
          </div>
        </div>
      </div>

      {/* Background Overlay (Optional for closing cart on outside click) */}
      {isCartOpen && (
        <div
          onClick={toggleCart}
          className="fixed inset-0 bg-black bg-opacity-50"
          style={{ zIndex: 999 }}
        ></div>
      )}
    </Container>
  );
}

export default Flexboxdata;
