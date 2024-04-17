import React from 'react'

const DisplayAllMovies = (props) => {
    const { allMovies } = props;
    // we can skip this single line if we pass it in the Movie Form
    return (
        <div>
            <h1>All Movie</h1>
            {
                allMovies.map((movie, idx) => {
                    return (
                        <div key={idx}>
                            <li>Title: {movie.title}</li>
                            <li>Release Year: {movie.year}</li>
                            <li>Genre: {movie.genre}</li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayAllMovies
