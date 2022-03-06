import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, Routes, BrowserRouter as Router, Link, Outlet } from 'react-router-dom'

import About from './About'
import Home from './Home'

function Navigation() {
    return (
        <Router>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="home">The Sewing Room</Navbar.Brand>
                <Nav className="me-auto" variant="pills">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </Router>
    )
}

export default Navigation