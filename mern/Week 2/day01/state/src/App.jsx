import './App.css'
import Product from './components/Product'
import Movie from './components/Movie'

function App() {


  return (
    <>
      <Product productName={"Stanley"} price={"132"} desc={"Very expensive water bottle"} inStock={15} />
      <Product productName={"MacBook Pro"} price={"1,400.99"} desc={"Apple Product"} inStock={25} />
      <Movie movieName={"Leon"} releaseYear={1994} ticketNumber={65} price={"10.55"} />
    </>
  )
}

export default App
