import React from 'react';

const header = (props) => {
    return (
        <nav>
            <ul>
                <li className="brand"><a href="/">&lambda;kiraff</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
                <li className="float-right"><a href="https://linkedin.com/in/akiraff">
                    <i className="fab fa-github fa-lg"></i>
                </a></li>
                <li className="float-right"><a href="https://github.com/Akiraff2015">
                    <i className="fab fa-linkedin fa-lg"></i>
                </a></li>
            </ul>
        </nav>
    );
};

export default header;