import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/inc/Navbar'
import Footer from './components/inc/Footer'
import Home from './components/pages/Home'
import './index.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}

 