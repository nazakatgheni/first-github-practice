import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DisplayAllFinder = () => {
    const [stores, setStores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores')
            .then(res => {
                console.log(res.data);
                setStores(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const clickHandler = () => {
        navigate('/stores/add');
    };

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                setStores(stores.filter(store => store._id !== id));
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <h4>Find stores in your area!</h4>
            <table className="table table-bordered text-center space-evenly">
                <thead>
                    <tr className="d-flex md-4">
                        <th>Store</th>
                        <th>Store Number</th>
                        <th>Open</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {stores.map(store => (
                        <tr key={store._id}>
                            <td>{store.storeName}</td>
                            <td>{store.storeNumber}</td>
                            <td>{store.checkbox}</td>
                            <td>
                                <button className="badge badge-secondary" onClick={() => deleteHandler(store._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={clickHandler}>Can't find your store?</button>
        </div>
    );
};

export default DisplayAllFinder;
