import React from 'react';
import "./sidebar.css"
import Logo from "../../assets/Logo.png"

function opencloseSidebar() {
    const sidebar = document.getElementById("sidebar");
    console.log("clicked");
    if (sidebar.style.width !== "100px") {
        sidebar.style.width = "100px";
    } else {
        sidebar.style.width = "0px";
    }
}

const Sidebar = () => {
    return (
        <aside className="sidebar" id="sidebar">
            <a onClick={opencloseSidebar} className="sidebar_button">
                <img src={Logo} alt="Logo" className="sidebar_logo" draggable="false"/>
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
        </aside>
    )
}

export default Sidebar