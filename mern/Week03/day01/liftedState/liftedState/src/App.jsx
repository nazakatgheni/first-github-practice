import { useState } from 'react';
import './App.css'
import MovieForm from './components/MovieForm'
import DisplayAllMovies from './components/DisplayAllMovies';
import OneMovie from './components/OneMovie';

function App() {
  const [allMovies, setAllMovies] = useState([]);

  return (
    <>
      <MovieForm allMovies={allMovies} setAllMovies={setAllMovies} />
      <DisplayAllMovies allMovies={allMovies} />
      <OneMovie allMovies={allMovies} />
    </>
  )
}

export default App
