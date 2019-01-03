import React, { Component } from 'react';
import Post from './Post/Post';

class Blog extends Component {

    render() {
        let posts = [
            {
                title: "Happy 0x7E3! ",
                id: "sdkal",
                date: "Jan 1, 2019 at 12:12",
                role: "Admin",
                author: "Akiraff",
                category: ["blog", "tech", "website"],
                content: {__html: `
                <p>Getting my third version of website up and running, with React. Sometimes this reminds me of the movie Matrix,
                where Neo fought with agent Smith, throughout the movie. I must say, I am quite proud of the work that I put this time,
                and slowly integrating Mobile Responsive towards my website, and hoping have fully functional by Jan 7 2019.</p>`
                }
            },

            {
                title: "#100DaysOfCode",
                id: "sdka2",
                date: "Jan 3, 2019 at 18:45",
                role: "Admin",
                author: "Akiraff",
                category: ["blog", "tech"],
                content: {__html: `
                <p>I finally started working on the backend of my website. It is going to be hosted on Express and NodeJS. hopefully
                it is not going to take too long to implement a simple blog system. Today I am going to be starting, #100DaysCodeChallenge.
                Basically I am required to program every single day, for the next 100 days. Yay me!</p>
                `}
            }
        ];

        return (
            <div>
                <h3 className="text-center">&lt;This are my most recent blog posts /&gt;</h3>
                {posts.reverse().map((post) => {
                    return <Post
                        title={post.title}
                        author={post.author}
                        role={post.role}
                        key={post.id}
                        date={post.date}
                        content={post.content}/>
                })}
            </div>
        );
    }
}

export default Blog;