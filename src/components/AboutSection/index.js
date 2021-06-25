import React from 'react'
import {AboutSection,
        AboutContainer,
        AboutTitle,
        AboutTeam,
        Member,
        MemberName,
        MemberContainer,
        MemberImg,
        MemberDesc} from './AboutElements'

import tux from '../../images/logo/tux.png'

function index() {
    return (
        <AboutSection>
            <AboutTitle>Croco-OS Team:</AboutTitle>
            <AboutContainer>
                <AboutTeam>
                    <Member>
                        <MemberName>GiacoLenzo2109</MemberName>
                        <MemberContainer>
                            <MemberImg src={tux}/>
                            <MemberDesc>Hi, i'm GiacoLenzo2109,
                                    <br/>i' m a computer science student at University of Milan Bicocca.
                            </MemberDesc>
                        </MemberContainer>
                    </Member>
                </AboutTeam>
            </AboutContainer>
        </AboutSection>
    )
}

export default index
