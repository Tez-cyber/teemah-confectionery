import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/new/navbar/Navbar';
import Home from './components/new/home/Home'
import About from './components/new/about/About'


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='/about' element={ <About /> } />
                    </Routes>
                </div>
            </Router>
        )
    }
}