import croco from '../../images/logo/logo.png'
import gitlab from '../../images/GitLab.png'
import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  NavMenu,
  NavCroco,
  NavLogo,
  NavLogoBtnLink,
  NavContainer,
  NavGitLabBtn,
  NavGitLabBtnLink,
  HamburgerMenu
} from './NavbarElements';
import Sidebar from '../Sidebar';

const Navbar = ({isOpen, setOpen}) => {
    return (
      <>
        <Nav>
            <NavContainer>
            <NavLogo>
                <NavLogoBtnLink to='/' activeStyle>
                        <img src={croco}/>
                </NavLogoBtnLink>
                <NavCroco to='/'>Croco-OS</NavCroco>
            </NavLogo>
            <NavMenu>
                <NavItem>
                    <NavLink exact={true} to='/' activeStyle>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/download' activeStyle>Download</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/about' activeStyle>About</NavLink>
                </NavItem>
            </NavMenu>
            <NavGitLabBtn>
                <NavGitLabBtnLink to='/gitlab' activeStyle>
                        <img src={gitlab} width="55"/>
                </NavGitLabBtnLink>
            </NavGitLabBtn>

            <HamburgerMenu isOpen={isOpen} onClick={setOpen}>
                <div />
                <div />
                <div />
            </HamburgerMenu>
            </NavContainer>
        </Nav>
      </>
    );
  };
    
  export default Navbar;