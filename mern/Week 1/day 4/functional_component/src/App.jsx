import './App.css'
import Product from './components/Product'
import Person from './components/Person'
import Movie from './components/Movie'

function App() {

  return (
    <>
      <Product productName={"Water"} desc={"Just add 2 cups of water"} cost={"4.99"} />
      <Product productName={"Lemonade"} desc={"Just add 2 cups of water"} cost={"6.99"} />
      <Person personFirstName={"Bill"} personLastName={"Billyjean"} />
      <Movie movieName={"The Notebook"} releaseYear={1994} />
    </>
  )
}

export default App

