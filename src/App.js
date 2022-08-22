import SinglePet from "./components/SinglePet";
import React, {useState} from "react";
import PetList from "./components/PetList";

function App() {
  const [pets, setPets] = useState([])
  return (
    <>
    <div className="App">
      <header className="App-header">
        <PetList pets={pets}/>
      </header>
    </div>
    </>
  )
}

export default App;
