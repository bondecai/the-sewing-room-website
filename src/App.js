import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Route, BrowserRouter as Router, useRouteMatch, Link, Routes } from "react-router-dom";

import Navigation from './Navigation'
import Home from './Home'
import About from './About'

function App() {
    return (
        <Navigation />
    )
}

export default App;