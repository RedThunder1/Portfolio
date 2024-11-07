import React from "react";
import './portfolio.css'
import Logo from '../../assets/ThunderBox.png'

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <div className="projects">
                <div className="thunderbox_project">
                    <div className="movement_div"></div>
                    <a href="https://github.com/RedThunder1/ThunderBox"></a>
                    <h2>ThunderBox</h2>
                    <p>Web music player</p>
                    <img src={Logo} alt="ThunderBox logo" className="thunderbox_logo"/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio