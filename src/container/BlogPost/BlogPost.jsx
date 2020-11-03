import React, { Component, Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';


class BlogPost extends Component {
    state = {
        post: [],
        // membuat objek form untuk melakukan post
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then(response => {
                this.setState({
                    post: response.data
                })
            })
    }

    // Handle remove after button clicked
    handleRemove = (data) => {       
        // delete using axios
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then(result => {
                this.getPostAPI()
            })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then(res =>{ 
            console.log(res)
            this.getPostAPI()
        }, (err) => {
            console.log(`Error: ${err}`)
        })
    }

    componentDidMount () {
        this.getPostAPI()
    }

    /*
        Mendapatkan nilai dari form post
        1. membuat objek pada state untuk menampung seluruh yang dibutuhkan form
        2. membuat event pada form yaitu onChange={}
        3. membuat id dengan timestamp
            -> membuat variabel dengan instansiasi new Date().getTime()
    */

    // membuat handler ketika form berubah
    handleFormChange = (event) => {
        // membuat copy dari state fromBlogPost
        let formBlogPostNew = {...this.state.formBlogPost}
        let timeStamp = new Date().getTime()
        
        // membuat timestamp untuk generate unique id 
        formBlogPostNew['id'] = timeStamp
        formBlogPostNew[event.target.name] = event.target.value

        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log('value state formBlogPost:', this.state.formBlogPost)
        })
    }

    // menangani submit button
    handleSubmit = () => {
        this.postDataToAPI()
    }

    render() {
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Add title" onChange={this.handleFormChange}/>

                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body-content" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>

                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
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
    
    // json-server --watch db.json --port 3004
}

export default BlogPost;