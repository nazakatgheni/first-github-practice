import './App.css'
import Assignment from './components/Assignment'
import PropItUp from './components/PropItUp';

// function App() {

//   return (
//     <>
//       <Assignment />
//     </>
//   )
// }

// export default App


function App() {

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <h2>Things I need to do :</h2>
            <ul>
                <li>Learn React</li>
                <li>Climb Mt. Everest</li>
                <li>Run a marathon</li>
                <li>Feed the dogs</li>
            </ul>

            <PropItUp firstName={"Nazakat"} lastName={"Gheni"} age={23} hairColor={"Red"} />
        </div>
    );
}

export default App;

// for each assignment should have one App