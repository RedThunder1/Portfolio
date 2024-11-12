import React from 'react';
import "./sidebar.css"

function opencloseSidebar() {
    const sidebar = document.getElementById("sidebar");
    const sidebar_button = document.getElementById("sidebar_button");
    const main = document.getElementById("main");
    if (sidebar.classList.contains("open")) {
        sidebar.style.width = "0px";
        main.style.width = "100%";
    } else {
        sidebar.style.width = "100px";
        main.style.width = "calc(100vw - 100px)";
    }
    sidebar.classList.toggle("open")
    sidebar_button.classList.toggle("open");
}

const Sidebar = () => {
    return (
        <aside>
            <a onClick={opencloseSidebar} className="sidebar_button" id="sidebar_button">
                <span className="menu_button"></span>
                <span className="menu_button"></span>
                <span className="menu_button"></span>
            </a>
            <div className="sidebar open" id="sidebar">
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
            </div>
        </aside>
    )
}

export default Sidebar