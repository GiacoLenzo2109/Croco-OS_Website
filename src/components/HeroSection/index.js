import React from 'react';
import Typewriter from 'typewriter-effect';
import { 
    HeroContainer,
    HeroHome,
    Logos,
    Laptop,
    LogoLoading,
    Loader,
    Terminal,
    TerminalBg,
    TerminalText,
    TerminalHostname,
    TerminalPacman,
    DownArrows,
    HeroDownload,
    ArchLogos,
    KdeLogo,
    Pacman,
    Arch,
    DownloadBtn,
    DownloadBtnLink,
    DownloadText,
    DownArrow} from './HeroElements';
import croco from '../../images/logo/logo.png';
import bg from '../../images/backgrounds/croco.jpg';
import notebook from '../../images/notebook.svg';
import kde from '../../images/KdeLogo.png';
import pacman from '../../images/pacman.png';
import arch from '../../images/arch.png';

function index() {
    return (
        <HeroContainer>
           <HeroHome>
               <center>
                    <Laptop>
                        <img class="notebook" src={notebook}/>
                        <img class="bg" src={bg}/>
                        <LogoLoading>
                            <Logos>
                                <img class="croco" src={croco}/>
                                {/* <img class="tux" src={tux}/> */}
                            </Logos>
                            <Loader/>
                        </LogoLoading>
                        <Terminal>
                            <TerminalBg/>
                            <TerminalText>
                                <TerminalHostname> [Croco-OS@croco-os]~$ </TerminalHostname>
                                <TerminalPacman>
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                                .pauseFor(9000)
                                                .changeDelay(50)
                                                .typeString("sudo pacman -S croco-os")
                                                .typeString("<br><br>Do you want to download Croco-OS? [Y / N]")
                                                .typeString("<br>")
                                                .pauseFor(1000)
                                                .typeString("Y")
                                                .changeDelay(1)
                                                .typeString("<br><br>-> 🡇Download Croco-OS🡇 <-")
                                                .typeString("<br><br>")
                                                .changeDelay(100)
                                                .typeString("<h5 style=\"color: red; font-weight: bold;\">[▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞▚▞]</h5>")
                                                .pauseFor(1500)
                                                .changeDelay(50)
                                                .typeString("<br>Thank for the download!")
                                                .start() 
                                            }
                                        }
                                    />
                                </TerminalPacman>
                            </TerminalText>
                        </Terminal>
                    </Laptop>
                    <DownArrows>
                        <DownArrow></DownArrow>
                        <DownArrow></DownArrow>
                    </DownArrows>
                </center>
            </HeroHome>
            <HeroDownload>
                <ArchLogos>
                    <KdeLogo src={kde} />
                    <Pacman src={pacman} />
                    <Arch src={arch} />
                </ArchLogos>
                <DownloadBtnLink to='/download'>
                    <DownloadBtn>Dowload Croco-OS</DownloadBtn>
                </DownloadBtnLink>
                <DownloadText>
                    Croco-OS is an Arch Linux based distro.
                    <br />You can download it with KDE Plasma and it's so similar to Mac OS.
                    <br />Croco-OS is user-friendly with some smooth animation.
                    <br />The file manager is pacman, the default FM of Arch.
                </DownloadText>
            </HeroDownload>
        </HeroContainer>
    )
}

export default index;
