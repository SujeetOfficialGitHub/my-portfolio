import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import {RxCross2} from 'react-icons/rx'
import {RiGraduationCapFill} from 'react-icons/ri'

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [currentPath, setCurrentPath] = useState(window.location.hash);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Create sticky navbar from fixed
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle a menu bar toggle button 
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
        const navList = document.querySelector('.navlist');
        navList.classList.toggle('menuOpen');
    };
    
    // Handle a navigation for current path 
    const handleNavigation = (hash) => {
        setCurrentPath(hash);
        const navList = document.querySelector('.navlist');
        navList.classList.remove('menuOpen');
        setIsMenuOpen(false)
    };

    return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="logo"><RiGraduationCapFill/></div>
        <ul className="navlist">
            <li>
                <a href="/#home" 
                    className={currentPath === '#home' ? 'active-link' : ''} 
                    onClick={() => handleNavigation('#home')}
                > 
                    Home
                </a>
            </li>
            <li>
                <a href="/#about"
                    className={currentPath === '#about' ? 'active-link' : ''}
                    onClick={() => handleNavigation('#about')}
                >
                    About
                </a>
            </li>
            <li>
                <a href="/#skills"
                    className={currentPath === '#skills' ? 'active-link' : ''}
                    onClick={() => handleNavigation('#skills')}
                >
                    Skills
                </a>
            </li>
            <li>
                <a href="/#projects"
                    className={currentPath === '#projects' ? 'active-link' : ''}
                    onClick={() => handleNavigation('#projects')}
                >
                    Projects
                </a>
            </li>
            <li>
                <a href="/#contact"
                    className={currentPath === '#contact' ? 'active-link' : ''}
                    onClick={() => handleNavigation('#contact')}
                >
                    Contact
                </a>
            </li>
        </ul>
        <div id="menu-icon" onClick={handleMenuToggle}>
            {isMenuOpen ? <RxCross2/> : <AiOutlineMenu />}
        </div>
    </header>
  );
};

export default Header;
