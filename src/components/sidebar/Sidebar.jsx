import React from 'react';
import "./sidebar.css"

function opencloseSidebar() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    if (sidebar.style.width !== "100px") {
        sidebar.style.width = "100px";
        main.style.width = "calc(100vw - 100px)"
    } else {
        sidebar.style.width = "0px";
        main.style.width = "100%";
    }
}

const Sidebar = () => {
    return (
        <aside>
            <a onClick={opencloseSidebar} className="sidebar_button">
                <i className="icon-menu"/>
            </a>
            <div className="sidebar" id="sidebar">
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