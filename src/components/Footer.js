import React from 'react';
import EmailForm from './EmailForm';

function Footer() {
    return (
        <div>
            <footer id="contact">
                <p><a href="mailto:danhol1989@gmail.com">&#9993;</a></p>
                <p><a href="www.linkedin.com/in/daniel-holland-aaa5b444"><img src={process.env.PUBLIC_URL + "/images/LI-In-Bug.png"} id = 'linkedIn' alt="LinkedIn"/></a></p>
                <p><a href="https://github.com/Seyaryu"><img src={process.env.PUBLIC_URL +"/images/GitHub-Mark-32px.png"} alt="Github"/></a></p>
                <p><a href='https://docs.google.com/document/d/1tcmQPzUYJxKk6UtjVqLp0waoBgNNss7gxXIJDY4SOKs/edit?usp=sharing'>Resume</a></p>
            </footer>
            <EmailForm />
        </div>
    )
}

export default Footer;