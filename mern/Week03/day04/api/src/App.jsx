import './App.css'
import UseEffect from './components/UseEffect'
import axios from 'axios'
import { useEffect, useState } from 'react'
// we can use axios and useEffect together or separately

function App() {

  const [pokeTen, setPokeTen] = useState([])
  // const [poke, setPoke] = useState([])
  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur/")
  //     .then(res => {
  //       console.log(res.data.name)
  //       setPoke(res.data.name)
  //     })
  // then will hold response success (if else statement)
  //     .catch(err => {
  //       console.log(err.data.name)
  //     })
  // we only return errors in catch thats why we don't pass useState in catch
  // }, [])


  const getPokemon = () => {
    // we can put axios in function or useEffect
    // we can use more than one useEffects
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then(res => {
        console.log(res.data.results)
        setPokeTen(res.data.results)
      })
      .catch(err => {
        console.log(err.data.results)
      })
  }



  return (
    <>
      {/* <p>API WALK THROUGH</p>
      {/* <p>{poke}</p> */}
      <p>Press to get first 10 pokemon</p>
      <button onClick={getPokemon}>Press Here</button>
      {/* <UseEffect /> */}

      {/* {
        pokeTen.map((pokemon, idx) => (
          <div key={idx}>
            <p>Pokemon Name: {pokemon.name}</p>
          </div>
        ))
      }  */}
      {/* this is jxs */}

      {pokeTen.map((pokemon, idx) => {
        return <p key={idx}>Pokemon name: {pokemon.name}</p>
      })}
      {/* this is js */}

    </>
  )
}

export default App
