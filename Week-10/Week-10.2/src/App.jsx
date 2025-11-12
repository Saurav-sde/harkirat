import { useState } from 'react'

function App() {
  
  return (
    <div>
      <LightBulb />
    </div>
  )
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true); 
  return (
    <div>
      <BulbState bulbOn={bulbOn}/>
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </div>
  )
}


// i defined a state variable in BulbState component but i want to use it in ToggleBulbState, here we have to roll up the state to lowest common ancestor (LCA)
function BulbState({bulbOn}) {
  // const [bulbOn, setBulbOn] = useState(true); // use this in the parent Component
  return (
    <div>
      { bulbOn ? "Bulb on" : "Bulb off" }
    </div>
  )
}

function ToggleBulbState({bulbOn, setBulbOn}) {
  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the Bulb</button>
    </div>
  )
}

export default App
