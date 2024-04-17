import React, { Component } from 'react'

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            year: ''
        }
    }

    changeHandler = e => {
        //   this is already a build-in function
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addNewMovie(this.state)
        this.setState({
            title: '',
            year: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Add a Movie</h1>
                <form onSubmit={this.submitHandler} className='col-md-6 mx-auto'>
                    <div>
                        <label htmlFor="title" className='form-label'>Title</label>
                        <input
                            type="text"
                            className='form-control'
                            onChange={this.changeHandler}
                            name='title'
                            value={this.state.title}
                            placeholder='Enter Title' />
                    </div>
                    <div>
                        <label htmlFor="year" className='form-label'>Year</label>
                        <input
                            type="number"
                            className='form-control'
                            onChange={this.changeHandler}
                            name='year' value={this.state.year}
                            placeholder='Enter Year' />
                    </div>
                    <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                </form>
            </div>
        )
    }
}

export default MovieForm