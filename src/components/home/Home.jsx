import React, {useEffect} from 'react';
import "./home.css"

let i = 0;
let x = 0;
let name = 'James Haver';
let title = 'Computer Science Student'
let speed = 80;

function nameEffect() {
    if (i < name.length) {
        document.getElementById("name").innerHTML += name.charAt(i);
        i++;
        setTimeout(nameEffect, speed);
    }
}
function titleEffect() {
    if (x < title.length) {
        document.getElementById("title").innerHTML += title.charAt(x);
        x++;
        setTimeout(titleEffect, speed);
    }
}

function Home() {
    useEffect(() => {
        nameEffect();
        titleEffect();
    }, []);
    return (
        <div className="home" id="home">
            <div className="info">
                <h1 id="name"></h1>
                <h2 id="title"></h2>
                <p>
                    Hi! My name is James Haver and im currently pursuing a degree in computer science at the University of Nebraska at Omaha.
                    I am a problem solver and a willing learner seeking to increase my knowledge of the industry.
                    I have a passion for all things tech and creating projects.</p>
            </div>
            <div className="background">&lt;/&gt;</div>

        </div>
    )
}

export default Home