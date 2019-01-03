import React from 'react';

const post = (props) => {
    return (
        <div className="card">
            <h2>{ props.title } <span className="small-text font-weight-normal"><i className="far fa-clock"></i> { props.date}</span> </h2>
            <h4>{ props.author } <span className="badge">{ props.role }</span></h4>
            <div dangerouslySetInnerHTML={props.content} />
        </div>
    );
};

export default post;