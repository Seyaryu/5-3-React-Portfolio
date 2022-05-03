import React from 'react';

function Navigation() {
    return (
        <div className='top-nav'>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' for="menu-toggle" >
                <div className='menu-button'></div>
            </label>
            <ul className='menu'>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Past Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navigation;