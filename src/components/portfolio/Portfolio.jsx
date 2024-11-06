import React from "react";
import './portfolio.css'
import Logo from '../../assets/ThunderBox.png'

const Portfolio = () => {
    return (
        <div className="about" id="portfolio">
            <h1>Portfolio</h1>
            <div className="projects">
                <div className="thunderbox_project">
                    <h2>ThunderBox</h2>
                    <img src={Logo} className="thunderbox_logo" alt="project_logo"/>
                    <a href="https://github.com/RedThunder1/ThunderBox"><i className="icon-social-github"></i></a>
                    <p className="description">ThunderBox is a project of mine where I am developing a web music player.</p>
                </div>
                <div className="project2"></div>
                <div className="project3"></div>
                <div className="project4"></div>
            </div>
        </div>
    )
}

export default Portfolio