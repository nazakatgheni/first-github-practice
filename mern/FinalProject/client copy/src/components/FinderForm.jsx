import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const FinderForm = () => {

    const [store, setStore] = useState({
        storeName: '',
        storeNumber: '',
        isOpen: false
    });
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const changeHandler = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setStore({ ...store, [e.target.name]: e.target.value })
    }
    const submitHandler = e => {
        e.preventDefault();
        console.log(e);
        axios.post('http://localhost:8000/api/stores', store)
            .then(res => {
                console.log(res);
                setStore(
                    {
                        storeName: '',
                        storeNumber: '',
                        isOpen: false
                    })
                navigate(`/stores/${res.data._id}`);
            })
            .catch(err => {
                console.log(err.response.data)
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div>
            <form onSubmit={submitHandler} className='col-md-4 offset-4'>
                <h4>Add a new store!</h4>
                <div className='mb-3'>
                    <label htmlFor="storeName" className='form-label'>Store Name:</label>
                    <input type="text" className='form-control' onChange={changeHandler} name='storeName' value={store.storeName} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="storeNumber" className='form-label'>Store Number:</label>
                    <input type="text" className='form-control' onChange={changeHandler} name='storeNumber' value={store.storeNumber} />
                </div>
                <div className='mb-3'>
                    <input type="checkbox" className='form-control' onChange={changeHandler} checked={store.isOpen} name="isOpen" />
                    <label htmlFor="isOpen" className='form-label'>Open</label>
                </div>
                <button className="badge badge-secondary" type='submit'>Add a new Store</button>
            </form>
        </div>
    )
}

export default FinderForm
