import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {

    const { unicorn, color } = useParams();

    return (
        <div>
            <h1 style={{ color: color }}>Your Word is .... {unicorn} and Your Color is {color}</h1>
        </div>
    )
}

export default Word
