import React, { Component } from 'react';
import Post from './Post/Post';

class Blog extends Component {

    render() {
        let posts = [
            {
                title: "Happy 0x7E3! ",
                id: "sdkal",
                date: "Jan 1, 2019 at 12:12",
                author: "Akiraff",
                category: ["blog", "tech", "website"],
                content: {__html: `
                <p>Getting my third version of website up and running, with React. Sometimes this reminds me of the movie Matrix,
                where Neo fought with agent Smith, throughout the movie. I must say, I am quite proud of the work that I put this time,
                and slowly integrating Mobile Responsive towards my website, and hoping have fully functional by Jan 7 2019.</p>`
                }
            },
        ];

        return (
            <div>
                <h3 class="text-center">&lt;This are my most recent blog posts /&gt;</h3>
                {posts.map((post) => {
                    return <Post
                        title={post.title}
                        key={post.id}
                        date={post.date}
                        author={post.author}
                        content={post.content}/>
                })}
            </div>
        );
    }
}

export default Blog;