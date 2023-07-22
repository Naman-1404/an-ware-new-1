import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeadr>
        <NavLink to="/">
            <img className='logo' src='./images/an-ware.png' alt='my logo'></img>
        </NavLink>
        <Nav/>
    </MainHeadr>
  )
}

const MainHeadr = styled.header`
    padding: 0 4.8rem;
    height: 6rem;
    background-color: cornsilk;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo {
    height: 5rem;
    padding: 0.5rem;
    }
`;

export default Header