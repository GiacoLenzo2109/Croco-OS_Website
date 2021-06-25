import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';


function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const setOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>  
            <Sidebar isOpen={isOpen} setOpen={setOpen}/>
            <Navbar isOpen={isOpen} setOpen={setOpen}/>
            <HeroSection />
            <Footer />
        </>
    )
}

export default Home
