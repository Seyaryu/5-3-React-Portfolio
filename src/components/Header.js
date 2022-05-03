import React from 'react';
import Navigation from './Navigation';
import About from './About'

function Header() {
    return (
        <div className="header">
            <nav className="navbar">
                <section id="logo">
                    <h1> Daniel Holland </h1>
                    <img src={process.env.PUBLIC_URL + "/images/portrait1.png"} alt="Portrait" />
                </section>
                <section class = "center">
                    <p><a href="mailto:danhol1989@gmail.com">&#9993;</a></p>
                    <p><a href="www.linkedin.com/in/daniel-holland-aaa5b444"><img src={process.env.PUBLIC_URL + "/images/LI-In-Bug.png"} id = 'linkedIn' alt="LinkedIn"/></a></p>
                    <p><a href="https://github.com/Seyaryu"><img src={process.env.PUBLIC_URL + "/images/GitHub-Mark-32px.png"} alt="Github"/></a></p>
                </section>  
                <Navigation />
            </nav>
            <About />
        </div>
    )
}

export default Header;