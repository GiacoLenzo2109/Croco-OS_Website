import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';


function Download() {
    const [isOpen, setIsOpen] = useState(false);

    const setOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>  
            <Sidebar isOpen={isOpen} setOpen={setOpen}/>
            <Navbar isOpen={isOpen} setOpen={setOpen}/>
            <DownloadSection />
            <Footer />
        </>
    )
}

export default Download