import React from 'react';
import "./home.css"
import Logo from '../../assets/Logo.png'

function Home() {
    return (
        <div className="home" id="home">
            <div className="info">
                <h1>James Haver</h1>
                <h2>Computer Science Student</h2>
                <p>     Hi! My name is James Haver and im currently pursuing a degree in computer science at the University of Nebraska at Omaha.
                    I love to solve problems and im willing learner seeking to increase my knowledge of the industry.
                    I have a passion for all things tech and love creating projects.</p>
                <a className="about_me_button" href="javascript:document.getElementById('about').scrollIntoView({behavior: 'smooth'})">About Me<i className="icon-arrow-right"/></a>
            </div>
            <img className="background" src={Logo} alt="Logo" draggable='False'></img>

        </div>
    )
}

export default Home