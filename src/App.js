import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Route, BrowserRouter as Router, useRouteMatch, Link, Routes } from "react-router-dom";

import Navigation from './Navigation'
import Footer from './Footer'

function App() {
    return (
        <React.Fragment>
            <Navigation />
            <Footer />
        </React.Fragment>
    )
}

export default App;