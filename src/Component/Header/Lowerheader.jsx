import React, { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import classes from "./header.module.css";

export default function Lowerheader() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 576);
        };

        // Initial check
        checkScreenSize();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const toggleMenu = () => {
        if (isMobile) {
            setMenuOpen(!menuOpen);
        }
    };

    return (
        <div className={`${classes.Lowerheader} ${menuOpen ? classes.active : ''}`}>
            <ul>
                <li className={classes.menuToggle} onClick={toggleMenu}>
                    <IoMenu />
                    <p>All</p>
                </li>
                <li>Today Deals</li>
                <li>Customer Services</li>
                <li>Registry</li>
                <li>Gift Card</li>
                <li>Sell</li>
            </ul>
        </div>
    );
}