import React from 'react'
import {Footer,
        FooterContainer,
        FooterText,
        DonationsBtn,
        DonationsLink} from './Footer'

function index() {
    return (
        <Footer>
            <FooterContainer>
                <FooterText>
                    @Croco-OS
                    <DonationsBtn>
                        <DonationsLink>
                            Donations
                        </DonationsLink>
                    </DonationsBtn>
                </FooterText>
            </FooterContainer>
        </Footer>
    )
}

export default index
