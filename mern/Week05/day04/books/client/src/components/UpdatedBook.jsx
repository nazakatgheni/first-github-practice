import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateBook = () => {

    const { id } = useParams();
    const [book, setBook] = useState({
        title: '',
        author: '',
        publishYear: '',
        pages: '',
        genre: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res => {
                console.log(res.data);
                setBook(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const changeHandler = e => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        // console.log(e);
        axios.put(`http://localhost:8000/api/books/${id}`, book)
            .then(res => {
                if (res.data.errors) {
                    console.log(res.data.errors);
                    setErrors(res.data.errors)
                } else {
                    navigate('/')
                }
            })
            .catch(err => {
                console.log(err.response.data)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler} className='col-md-4 offset-4'>
                <h1>Create a Book</h1>
                <div className='mb-3'>
                    <label htmlFor="title" className='form-label'>Title:</label>
                    {/* <input type="text" onChange={e = setBook({ ...book, title: e.target.value })} /> */}
                    {/* we either can write on line code or function like this */}
                    <input type="text" className='form-control' onChange={changeHandler} name='title' value={book.title} />
                    {/* conditional ternary operator */}
                    {errors.title ? <p className='text-danger'>{errors.title.message}</p> : null}
                </div>
                <div className='mb-3'>
                    <label htmlFor="author" className='form-label'>Author:</label>
                    <input type="text" className='form-control' onChange={changeHandler} name='author' value={book.author} />
                    {errors.author ? <p className='text-danger'>{errors.author.message}</p> : null}
                </div>
                <div className='mb-3'>
                    <label htmlFor="pages" className='form-label'>Pages:</label>
                    <input type="text" className='form-control' onChange={changeHandler} name='pages' value={book.pages} />
                    {errors.pages ? <p className='text-danger'>{errors.pages.message}</p> : null}
                </div>
                <div className='mb-3' >
                    <label htmlFor="publishYear" className='form-label'>Publish Year:</label>
                    <input type="text" className='form-control' onChange={changeHandler} name='publishYear' value={book.publishYear
                    } />
                    {errors.publishYear ? <p className='text-danger'>{errors.publishYear.message}</p> : null}
                </div>
                <div className='mb-3'>
                    <label htmlFor="genre" className='form-label'>Genre:</label>
                    <input type="text" className='form-control' onChange={changeHandler} name='genre' value={book.genre} />
                    {errors.genre ? <p className='text-danger'>{errors.genre.message}</p> : null}
                </div>
                <button type='submit' className='btn btn-primary'>Create a Book</button>
            </form>
        </div>
    )
}

export default UpdateBook