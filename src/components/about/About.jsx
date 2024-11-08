import React from 'react';
import {PDFViewer, Document, Page} from "react-pdf";
import "./about.css"
import Resume from '../../assets/Resume.pdf'
import Java from '../../assets/icons/java.png'
import Kotlin from '../../assets/icons/kotlin.png'
import JS from '../../assets/icons/js.png'
import TS from '../../assets/icons/typescript.png'
import HTML from '../../assets/icons/html.png'
import CSS from '../../assets/icons/css.png'
import Python from '../../assets/icons/python.png'
import REACT from '../../assets/icons/react.png'
import Node from '../../assets/icons/node.png'

const About = () => {
    return (
        <div className="about" id="about">
            <h1>Hi There!</h1>
            <div className="about_info">
                <p className="about_description"> Welcome to my portfolio page!
                    My name is James Haver, I'm student attending the University of Nebraska at Omaha pursuing a
                    computer science degree. I love to create projects, solve problems and learn. I am always seeking to learn and teach myself more and create better projects.
                </p>
                <div className="skills">
                    <h2>Skills</h2>
                    <ul className="skills_list">
                        <li className="skills_item"><img src={HTML} alt="HTML Icon" className="skills_img"/></li>
                        <li className="skills_item"><img src={CSS} alt="CSS Icon" className="skills_img"/></li>
                        <li className="skills_item"><img src={JS} alt="JavaScript Icon" className="skills_img"/></li>
                        <li className="skills_item"><img src={TS} alt="TypeScript Icon" className="skills_img"/></li>
                        <li className="skills_item"><img src={Java} alt="Java Icon" className="skills_img"/></li>
                        <li className="skills_item"><img src={Kotlin} alt="Kotlin Icon" className="skills_img"/></li>
                        <li className="skills_item"><img src={Python} alt="Python Icon" className="skills_img"/></li>
                        <li className="skills_item"><img src={REACT} alt="React Icon" className="skills_img"/></li>
                        <li className="skills_item"><img src={Node} alt="Node Icon" className="skills_img"/></li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>Contact Info</h2>
                    <p>jameshaver04@gmail.com</p>
                    <p>(402)-637-3739</p>
                    <ul className="contact_list">
                        <li className="contact_item">
                            <a href="https://github.com/RedThunder1" className="contact_link"><i
                                className="icon-social-github"></i></a>
                        </li>
                        <li className="contact_item">
                            <a href="https://www.linkedin.com/in/james-haver/" className="contact_link"><i
                                className="icon-social-linkedin"></i></a>
                        </li>
                        <li className="contact_item">
                            <a href="mailto:jameshaver04@gmail.com" className="contact_link"><i
                                className="icon-envelope"/></a>
                        </li>
                    </ul>
                </div>
                <h2>Resume</h2>
                <object data={Resume} width="800" height="600" className="resume"></object>
            </div>
            <hr className="divider"/>
        </div>
    );
}

export default About