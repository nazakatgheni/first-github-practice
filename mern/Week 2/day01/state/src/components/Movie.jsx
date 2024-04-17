import React, { useState } from 'react'

const Movie = (props) => {
    const { movieName, releaseYear, ticketNumber, price } = props
    const [sellTicket, setSellTicket] = useState(ticketNumber)

    const runEvent = () => {
        setSellTicket(sellTicket - 1)
    }
    return (
        <div>
            <h1>Today's Movie: {movieName}</h1>
            <h2>Release Year: {releaseYear}</h2>
            <h2>We Still Have {sellTicket} Ticket</h2>
            <h2>${price}</h2>
            <button onClick={runEvent}> By Ticket </button>
        </div >
    )
}

export default Movie
