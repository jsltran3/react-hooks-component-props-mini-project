import React from "react"; 

function Article({ posts, key, title, date="January 1, 1970" , preview }) {
    console.log({title})
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
};



export default Article; 

