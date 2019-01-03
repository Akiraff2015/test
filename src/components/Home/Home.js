import React from 'react';

const home = (props) => {
    return (
        <div className="background-wallpaper">
            <img src="./wallpaper.jpg" />
            <div className="intro-header">
                <h1>Hello, my name is Akira.</h1>
                <h3>I am a Fullstack Developer</h3>
                <p>Passion driven in developing websites with modern web technologies.</p>
            </div>
        </div>
    );
};

export default home;