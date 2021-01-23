import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        title: '',
        body: '',
        featured_image: null
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onImageChange = event => {
        this.setState({ featured_image: event.target.files[0] });
    };

    handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('body', this.state.body);
        formData.append('featured_image', this.state.featured_image);

        await fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: formData
        })
            .catch(error => console.log(error))

        const response = await fetch('http://localhost:3000/posts')
        const data = await response.json();
        console.log(data);

        this.input1.value = ''
    };

    render() {
        return (
            <>
                {/* figuring out how to display uploaded image */}
               
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="please type in the title" ref={currNode => this.input1 = currNode} onChange={this.handleChange} />
                    <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange} />
                    <button>press me</button>
                </form>

                 {/* <img src={this.props.post.featured_image} alt=""/> */}
            </>
        )
    }
}
