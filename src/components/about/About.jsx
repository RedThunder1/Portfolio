import React from 'react';
import "./about.css"

const About = () => {
    return (
        <div className="about" id="about">
            <div className="basic_info">
                <h1>About</h1>
                <div className="about">
                    <div className="about_description">
                        <p> Welcome to my portfolio page!
                            My name is James Haver, a student attending the University of Nebraska Omaha pursuing a computer
                            science degree. I like to create projects, solve problems, and to learn more. I am experienced in Java, and
                            Python with intermediate Knowledge of HTML, JavaScript/TypeScript, and CSS.
                        </p>
                    </div>
                    <div className="skills">
                        <h2>Skills</h2>
                        <ul className="skills_list">
                            <li className="skills_item">

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact">
                    <h2>Contact Info</h2>
                    <ul className="contact_list">
                        <li className="contact_item">
                            <p>jameshaver04@gmail.com</p>
                        </li>
                        <li className="contact_item">
                            <p>(402)-637-3739</p>
                        </li>
                        <li className="contact_item">
                            <a href="https://github.com/RedThunder1" className="contact_link"><i
                                className="icon-social-github"></i></a>
                        </li>
                        <li className="contact_item">
                            <a href="https://www.linkedin.com/in/james-haver/" className="contact_link"><i
                                className="icon-social-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About