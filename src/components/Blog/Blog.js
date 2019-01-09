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
            },

            {
                title: "JWT, Redux... Steep learning curve!",
                id: "sdka3",
                date: "Jan 7, 2019 at 01:43",
                author: "Akiraff",
                role: "Admin",
                category: ["blog", "tech"],
                content: {__html: `
                <p>I've been a bit stuck in doing some research on JWT authentication, and doing a little studies on Redux. 
                Since it is quite new concept for me, it is taking a bit of time to grasp. I've been trying to implement JWT 
                for the past 3 days already, the only reason why I didn't implement earlier, is simply I didn't had enough time 
                during this week. Hoping during my days off on Wednesday and Thursday, I will manage to update my Github, to be 
                using Redux and JWT/Passport for my authentication.</p>
                `}
            }
        ];

        return (
            <div className="nav-margin">
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