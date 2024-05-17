// RoutLink.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function RoutLink() {
    return (
        <Nav className="justify-content-center" activeKey="/">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/" exact style={{ color: 'inherit', textDecoration: 'none' }}>
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/allProducts" style={{ color: 'inherit', textDecoration: 'none' }}>
                    AllProducts
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/Search" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Search
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default RoutLink;
