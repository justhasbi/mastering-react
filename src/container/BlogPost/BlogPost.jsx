import React, { Component, Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';


class BlogPost extends Component {
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
            .then(response => {
                this.setState({
                    post: response.data
                })
            })
    }

    // Handle remove after button clicked
    handleRemove = (data) => {
        console.log(data)
        // delete using axios
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then(result => {
                this.getPostAPI()
            })
    }

    componentDidMount () {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(data => this.setState({
        //         post: data
        //     })
        // )

        this.getPostAPI()
    }

    render() {
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="post-container">
                    {
                        this.state.post.map(post => {
                            return(
                                < Post key={post.id} 
                                data={post}
                                remove={this.handleRemove}/>
                            )
                        })
                    }
                </div>
            </Fragment >
        ) 
    }
}

export default BlogPost;