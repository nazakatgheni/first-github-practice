import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditFinder = () => {
    const { id } = useParams();
    const [store, setStore] = useState({
        storeName: '',
        storeNumber: '',
        isOpen: false // Assuming isOpen is related to the checkbox
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                console.log(res.data);
                setStore(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const changeHandler = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setStore({ ...store, [e.target.name]: value });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/stores/${id}`, store)
            .then(res => {
                if (res.data.errors) {
                    console.log(res.data.errors);
                    setErrors(res.data.errors);
                } else {
                    navigate(`/stores/${res.data._id}`);
                }
            })
            .catch(err => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <form onSubmit={submitHandler} className='col-md-4 offset-4'>
                <h4>Edit this store!</h4>
                <div className='mb-3'>
                    <label htmlFor="storeName" className='form-label'>Store Name:</label>
                    <input type="text" className='form-control' onChange={changeHandler} name='storeName' value={store.storeName} />
                    {errors.storeName ? <p className='text-danger'>{errors.storeName.message}</p> : null}
                </div>
                <div className='mb-3'>
                    <label htmlFor="storeNumber" className='form-label'>Store Number:</label>
                    <input type="text" className='form-control' onChange={changeHandler} name='storeNumber' value={store.storeNumber} />
                    {errors.storeNumber ? <p className='text-danger'>{errors.storeNumber.message}</p> : null}
                </div>
                <div className='mb-3'>
                    <input type="checkbox" className='form-control' onChange={changeHandler} checked={store.isOpen} name='isOpen' />
                    <label htmlFor="isOpen" className='form-label'>Open</label>
                </div>
                <button className="badge badge-secondary" type='submit'>Edit Store</button>
            </form>
        </div>
    );
};

export default EditFinder;
