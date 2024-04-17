import React from 'react'

const Movie = (props) => {
    // const dsrtMovie = props => movieName + releaseYear
    // console.log(dsrtMovie)

    // const { nameOfMovie: TNB, yearOfRelease: 1994} = props; ?WRONG ONE

    const { movieName, releaseYear: year } = props;
    return (
        <div>
            {/* <h1>Move Name: {props.movieName}</h1>
            <h2>Release Year: {props.releaseYear}</h2> */}
            <h1>Move Name: {movieName}</h1>
            <h2>Release Year: {year}</h2>
        </div>
    )
}

export default Movie
