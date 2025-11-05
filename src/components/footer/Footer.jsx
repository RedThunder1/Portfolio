import React from 'react';
import './Footer.css'
import Logo from '../../assets/Logo.png'

function Footer() {
    return (
        <div className="footer">
            <img className="logo" src={Logo} alt="Logo" draggable="false"/>
            <ul className="media_links">
                <li className="media_link">
                    <a href="https://github.com/RedThunder1"><i className="icon-social-github"/></a>
                </li>
                <li className="media_link">
                    <a href="https://www.linkedin.com/in/james-haver/"><i className="icon-social-linkedin"/></a>
                </li>
                <li className="media_link">
                    <a href="mailto:jameshaver04@gmail.com"><i className="icon-envelope"/></a>
                </li>
            </ul>
            <p>© 2025 James Haver | <a href="https://github.com/RedThunder1/Portfolio">Source Code</a></p>
        </div>
    );
}

export default Footer;