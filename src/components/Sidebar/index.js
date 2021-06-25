import React from 'react';
import {
    SidebarContainer,
    SidebarMenu,
    SidebarLink,
    SidebarBtn,
    SidebarWrapper,
    SidebarBtnLink
} from './SidebarElements';
import gitlab from '../../images/GitLab.png'


const Sidebar = ({isOpen, setOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} setOpen={setOpen}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={setOpen}>Home</SidebarLink>
                    <SidebarLink to='/download' onClick={setOpen}>Download</SidebarLink>
                    <SidebarLink to='/about' onClick={setOpen}>About</SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <SidebarBtnLink to='/gitlab'>
                        <img src={gitlab} width="55" alt="gitlab icon"/>
                    </SidebarBtnLink>
                </SidebarBtn>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;