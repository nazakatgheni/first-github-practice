import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

const DisplayOneFinder = () => {
    const [singleStore, setSingleStore] = useState({});
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                // console.log(res.data);
                setSingleStore(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    const clickHandler = () => {
        navigate(`/stores/edit/${singleStore._id}`); // Use backticks for string interpolation
    }

    return (
        <div>
            <p>{singleStore.storeName}</p>
            <p>{singleStore.storeNumber}</p>
            <p>{singleStore.checkbox}</p>
            <button className="badge badge-secondary" onClick={clickHandler} value={singleStore._id}>Edit Store Details</button>
        </div>
    )
}

export default DisplayOneFinder
