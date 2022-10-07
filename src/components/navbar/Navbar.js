import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
// import { Link as LinkR } from 'react-router-dom'


const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background: #0c1023;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 500;
`
const Logo = styled(Link)`
  color: var(--white);
  cursor: pointer;
`
const Nav = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only Screen and (max-width: 48em) {
    display: none;
  }

  a {
    font-weight: 400;
    color: var(--white);
    line-height: 1.5;

    &::after {
      content: "";
      display: block;
      height: 1.5px;
      width: 3px;
      background: transparent;
      transition: width .5s;
    }

    &:hover::after {
      width: 100%;
      background: var(--main-color)
    }
  }
`

const HamburgerBtn = styled.button`
  position: relative;
  background: transparent;
  border: none;
  width: 2rem;
  height: 15px;
  cursor: pointer;
  display: none;

  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }

  &::before, 
  &::after {
    content: "";
    background: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all .3s;
  }

  &::before {
    top: ${props => (props.clicked ?
        "0" : "-.5rem"
      )};
    transform: ${props => (props.clicked ? "rotate(135deg)" : "rotate(0)")}
  }

  &::after {
     top: ${props => (props.clicked ?
        "0" : ".5rem"
      )};
    transform: ${props => (props.clicked ? "rotate(-135deg)" : "rotate(0)")}
  }
`

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top:  100%;
  left: 0;
  right: 0;
  // opacity: ${props => (props.clicked ? "1" : "0")}
  visibility: ${props => (props.clicked ? "visible" : "hidden")};

  background: var(--dark-color);
  opacity: .95;
  border-radius: 20px;
  margin: .5rem;
  overflow-x: hidden;

  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
      <MainHeader>
          <Logo to="/">
            <h2>Teemah</h2>
          </Logo>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Our menu</Link>
            <Link to="/contact">Contact Us</Link>
          </Nav>
          <HamburgerBtn onClick={() => handleClick()} clicked={click}>
            <span />
          </HamburgerBtn>
          <MobileMenu clicked={click}>
            <Link to="/" onClick={() => handleClick()}>Home</Link>
            <Link to="/about" onClick={() => handleClick()}>About</Link> 
            <Link to="/menu" onClick={() => handleClick()}>Our menu</Link>
            <Link to="/contact" onClick={() => handleClick()}>Contact Us</Link>
          </MobileMenu>
      </MainHeader>
  )
}

export default Header