import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';


function About() {
    const [isOpen, setIsOpen] = useState(false);

    const setOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>  
            <Sidebar isOpen={isOpen} setOpen={setOpen}/>
            <Navbar isOpen={isOpen} setOpen={setOpen}/>
            <AboutSection />
            <Footer />
        </>
    )
}

export default About