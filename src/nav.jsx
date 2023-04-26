import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavbarContainer = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 100px;
  
  /* z-index: 9999; */
`;

const NavbarLogo = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #333;
`;

const NavbarLinks = styled("ul")`
  display: flex;
  list-style: none;
  text-decoration: none;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #333;
  margin: 0 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ff6600;
  }
`;


const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>MyBag</NavbarLogo>
      <NavbarLinks>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/signin">Sign In</NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;