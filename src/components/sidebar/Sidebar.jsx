import React from 'react';
import "./sidebar.css"
import Logo from "../../assets/SpartanLogo.png"


const Sidebar = () => {
    return (
        <aside className="sidebar">
            <a href="javascript:document.getElementById('home').scrollIntoView({behavior: 'smooth'})">
                <img src={Logo} alt="Logo" className="sidebar_logo"/>
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">

                        <li className="nav__item">
                            <a href="javascript:document.getElementById('home').scrollIntoView({behavior: 'smooth'})"
                               className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="javascript:document.getElementById('about').scrollIntoView({behavior: 'smooth'})"
                               className="nav__link">
                                <i className="icon-user"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="javascript:document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})"
                               className="nav__link">
                                <i className="icon-wrench"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="nav__footer">

            </nav>
        </aside>
    )
}

export default Sidebar