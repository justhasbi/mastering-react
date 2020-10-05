import React from 'react'
const Post  = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/tech" alt="img"/>
            </div>
            <div className="content">
                <h3 className="title">{props.data.title}</h3>
                <p className="desc">{props.data.body}</p>
                <div className="btn-container">
                    <button className="btn remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                    <button className="btn edit">Update</button>
                </div>
            </div>
        </div>
    )
}

export default Post;