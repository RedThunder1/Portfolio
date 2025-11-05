import React from "react";
import './portfolio.css'

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <h4>One of my favorite ways of learning is to make my own little projects to learn new things and also potentially something useful.<br/>Here I want to show off my more interesting and cool projects I am making.</h4>
            <div className="projects">
                <div className="project thunderbox">
                    <a href="https://github.com/RedThunder1/ThunderBox"></a>
                    <h2>ThunderBox</h2>
                    <p className="description">ThunderBox is a project of mine where I am creating a web music player. It is currently a work in progress.</p>
                    <p className="link-text">Click to learn more.</p>
                </div>
                <div className="project vector">
                    <a href="https://github.com/RedThunder1/Vector"></a>
                    <h2>Vector</h2>
                    <p className="description">Vector is a TodoList and Note taking webapp.</p>
                    <p className="link-text">Click to learn more.</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio