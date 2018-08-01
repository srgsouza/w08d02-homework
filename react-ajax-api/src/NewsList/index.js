import React from 'react';

// functional component
// stateless, dumb component

// props is passed when the parent's render function is called
const NewsList = (props) => {
    // map creates a new array of all our jsx list items inside of a new array
    const newsList = props.news.map((news, index) => {
        return ( 
            <div key={index}> <h4>{news.title}</h4> 
                <p>{news.description}</p>
                <p><small>Author: </small> {news.author}</p>
            </div>  
        )   
    });

    return (
        <div>
            <h2> News </h2>
            <ul>
                {newsList}
            </ul>
        </div>

    )
}


export default NewsList;


// ### Lines bellow show how the delete button can be implemented (calls delete function that was passed down)
// const newsList = props.news.map((news, index) => {
//     return (<li key={index}>{news.title}
//         <button onClick={props.deleteNews.bind(null, index)}>Delete</button>
//     </li>
//     )
// });