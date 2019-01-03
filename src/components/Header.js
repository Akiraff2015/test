import React from 'react';

const header = (props) => {
    return (
        <nav>
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    );
};

export default header;