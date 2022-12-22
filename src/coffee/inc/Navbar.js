import React, { Component } from 'react'
import { FaTimes, FaBars  } from 'react-icons/fa'
import img1 from "../images/logo.png"

export default class Navbar extends Component {
    componentDidMount() {
        // Nav bar
        const navMenu = document.getElementById('nav-menu'),
              navToggle = document.getElementById('toggle-nav'),
              navClose = document.getElementById('nav-close'),
              navLink = document.querySelectorAll('.nav-link')

        if(navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu')
            })
        }
        if(navClose) {
            navClose.addEventListener('click', linkAction)
        }
        function linkAction() {
            navMenu.classList.remove('show-menu')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))
        // Sticky Header
        function scrollHeader(){
            const header = document.getElementById('header')
            if(this.pageYOffset >= 50) header.classList.add('scroll-header');
            else header.classList.remove('scroll-header')
        }
        window.addEventListener('scroll', scrollHeader)
        console.log(this.pageYOffset)
    }
  render() {
    return (
        <>
            {/*------------Heading------------*/}
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="/" className="nav-logo">
                        <img src={img1} alt="" />
                        Coffee
                    </a>
                    <div className="nav-menu" id="nav-menu">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="#home" className="nav-link active-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#products" className="nav-link">Products</a>
                            </li>
                            <li className="nav-item">
                                <a href="#premium" className="nav-link">Premium</a>
                            </li>
                            <li className="nav-item">
                                <a href="#blog" className="nav-link">Blog</a>
                            </li>
                        </ul>
                        <div className="nav-close" id="nav-close">
                            <FaTimes />
                        </div>
                    </div>
                    <div className="toggle-nav" id="toggle-nav">
                        <FaBars />
                    </div>
                </nav>
            </header>
        </>
    )
  }
}

