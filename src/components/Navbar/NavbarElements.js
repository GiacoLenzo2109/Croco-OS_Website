import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
  
export const Nav = styled.nav `
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&display=swap');
    //border-radius: 25px;
    background-color: black;
    height: 80px;
    display: fixed;
    //margin: 15px 15px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 999;
    //font-family: 'Fira Sans', sans-serif, bold, italic;
    transition: 0.8s all ease;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 10;
    width: 100%;
    padding: 0 24px;
    max-width: 1750px;
`;

export const NavCroco = styled(LinkR)`
    font-family: 'Junegull';
    color: red;
    //justify-self: flex-start;
    cursor: pointer;
    font-size: 1.90vw;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 3px;

    @media screen and (max-width: 768px){
        font-size: 1.85rem;
    }
`;

export const NavLogo = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-65%, -50%);
    }
`;
  
export const NavLogoBtnLink = styled(LinkR)`
    width: 100px;
    margin-top: 5px;
    padding: 0 20px;
    cursor: pointer;
`;


export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(LinkR)`
    display: flex;
    font-family: 'Junegull';
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    color: black;
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -4.5px -4.5px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
    list-style-type: none; 
    margin-left: 3vw;
    margin-right: 3vw;

    font-size: 2.5rem;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 950px){
        font-size: 2.25rem;
    }

    @media screen and (max-width: 850px){
        font-size: 1.75rem;
    }

    &:hover{
        transition: all 0.2s ease-in-out;
        //transform: scale(1.15);
        text-shadow: 2px 0 0 #00ff00, -2px 0 0 #00ff00, 0 2px 0 #00ff00, 0 -2px 0 #00ff00, 1px 1px #00ff00, -1px -1px 0 #00ff00, 1px -1px 0 #00ff00, -1px 1px 0 #00ff00;
        //color: red;
        //text-shadow: 0 0 1.5em #33a1ff, 0 0 0.2em black;
        transform: translate(-4.5px,-4.5px);
    }

    &.active{
        background: #3f37c9;
        border-radius: 25px;
    }
`;
  
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    //background: #4361ee;
    border-radius: 25px;
    height: 80px;
    display: flex;
    position: sticky;
    z-index: 15;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.85);

    @media screen and (max-width: 768px){
        display: none;
    }
`;
  
export const NavGitLabBtn = styled.nav`
    display: flex;
    align-items: center;
`;
  
export const NavGitLabBtnLink = styled(LinkR)`
    margin-top: 5px;
    padding: 0 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.45);
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const HamburgerMenu = styled.button`
    display: none;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: yellow;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        padding: 0;
        justify-content: space-around;
        outline: none;

        div {
            width: 2rem;
            height: 0.25rem;
            background: ${({ isOpen }) => (isOpen ? '#ff0000' : '#ffff00')};
            border-radius: 100px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;
        
            :first-child {
              transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
            }
        
            :nth-child(2) {
              opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
              transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
            }
        
            :nth-child(3) {
              transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
            } 
        }
    }
`;