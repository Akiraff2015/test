import React from 'react';

const header = (props) => {
    return (
        <nav>
            <ul>
                <li className="brand"><a href="/">&lambda;kiraff</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default header;