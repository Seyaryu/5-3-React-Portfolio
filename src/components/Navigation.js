import React, { useState } from 'react';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

function Navigation() {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
    setNavbarOpen(false)
    }

    return (
        
        <nav className="navBar">
            <button onClick={handleToggle}>
                {navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )}
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <li activeClassName="active-link" onClick={() => closeMenu()}><a href="#about">About Me</a></li>
                <li activeClassName="active-link" onClick={() => closeMenu()}><a href="#projects">Past Projects</a></li>
                <li activeClassName="active-link" onClick={() => closeMenu()}><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;