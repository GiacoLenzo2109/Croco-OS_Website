import React from 'react'
import {DownloadSection,
        DownloadContainer,
        DownloadTitle,
        DownloadMain,
        DownloadIcon,
        DownloadBtnLink,
        DownloadBtn} from './DownloadElements'

import laptop from '../../images/notebook.svg'
import croco from '../../images/logo/croco.png'

function index() {
    return (
        <DownloadSection>
            <DownloadContainer>
                <DownloadTitle>Download Croco-OS:</DownloadTitle>
                <DownloadMain>
                    <DownloadIcon src={croco} />
                    <DownloadBtnLink>
                        <DownloadBtn>
                            Download 🡇
                        </DownloadBtn>
                    </DownloadBtnLink>
                </DownloadMain>
            </DownloadContainer>
        </DownloadSection>
    )
}

export default index
