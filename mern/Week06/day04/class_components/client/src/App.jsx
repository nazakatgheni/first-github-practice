import { Component } from 'react'
import './App.css'
import MovieForm from './components/MovieForm'

class App extends Component {

  // The way Components in React are able to hold onto their own information is inside of a variable we will be calling state.
  state = {
    movies: [{ title: 'Barbie', year: '2023' }, { title: 'Other Mother', year: '2004' }]
  }

  addNewMovie = (newMovie) => {
    this.setState({
      movies: [...this.state.movies, newMovie]
    }
    )
  }

  render() {

    return (
      <>
        {/* <h1>Hello World</h1> */}
        <MovieForm addNewMovie={this.addNewMovie} />
        {
          this.state.movies.map((movie, idx) => {
            return (
              <div key={idx}>
                <h2>Movie Title: {movie.title}</h2>
                <p>Release Year: {movie.year}</p>
              </div>
            )
          })
        }
      </>
    )
  }
}

export default App
