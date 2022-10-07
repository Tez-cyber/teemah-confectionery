import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/inc/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Menu from './components/products/Menu'

export default class App extends Component {
  render() {
    return ( 
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={ <About /> } />
            <Route path="/menu" element={ <Menu /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}

 