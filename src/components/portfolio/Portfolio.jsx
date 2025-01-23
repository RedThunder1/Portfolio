import React from "react";
import './portfolio.css'

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <div className="projects">
                <div className="thunderbox_project">
                    <a href="https://github.com/RedThunder1/ThunderBox"></a>
                    <h2>ThunderBox</h2>
                    <p className="tb-description">ThunderBox is a project of mine where I am creating a web music player. It is currently a work in progress.</p>
                    <p className="link-text">Click to learn more.</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio