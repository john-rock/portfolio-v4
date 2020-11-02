import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1.2vw;
  transition: all 200ms ease-in;
  position: relative;
  text-transform: lowercase;
  font-weight: 300;
  font-size:1.4rem;
  z-index: 5;

  :after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: -25px;
    width: 0%;
    border-radius:50px;
    background: #FD695A;
    height: 12px;
    width: 12px;
    transition: all 200ms ease-in;
    z-index: -1;
    opacity: 0;
  }

  :hover {
    ::after {
        left: -15px;
        opacity: 1
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">home</NavItem>
      <NavItem to="/projects">projects</NavItem>
      {/* <NavItem to="/page-2">gallery</NavItem> */}
      <NavItem to="/404">contact</NavItem>
    </>
  )
}

export default NavbarLinks