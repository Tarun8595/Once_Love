import './index.css'
import React, { useState, useEffect } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(

        <>
        <div className="navbar">
            <div className="nav-container">
                <p className='nav-logo'>GTSYNTAX</p>
                <div className="nav-menu-box" onClick={() => setIsOpen(true)}>
                    <p className='nav-menu'>MENU</p>
                </div>
            </div>
        </div>
        <div className={`fullscreen-menu ${isOpen ? "show" : ""}`}>
            <div className="nav-close-box" onClick={() => setIsOpen(false)}>
                <p className="close-btn">CLOSE</p>
            </div>
            <ul className="menu-items">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Story">Story</a></li>
                <li><a href="#Gallery">Gallery</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
       </div>
        
        </>
    );
}