import './App.css'
import Album from './components/Album'

function App() {
  // const thisAlert = () => {
  //   alert("You Clicked This Event")}
  // }

  return (
    <>
      {/* <h1 onClick={ () => {alert("You Clicked This Event")}}>Click me</h1>
      <h1 onClick={thisAlert}>Click me</h1>
     */}
      <Album albumName={"Human After All By"}
        bandName={"Daft Punk"}
        releaseYear={"2005"}
        genre={"Techno"}
        albumSales={25} />

    </>
  )
}

export default App
