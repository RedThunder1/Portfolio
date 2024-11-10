import React from "react";
import './portfolio.css'
import Logo from '../../assets/ThunderBoxScreen.png'

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <div className="projects">
                <div className="thunderbox_project">
                    <a href="https://github.com/RedThunder1/ThunderBox"></a>
                    <h2>ThunderBox</h2>
                    <p>ThunderBox is a project of mine where I am creating a web music player. It is currently a work in progress.</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio