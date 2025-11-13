import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// custom hook
function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count => count + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount
  }

}
 
function App() {
  return (
    <div>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <p>Hii there</p>
      <Counter2/>
    </div>
  )
}

function Counter() {
  const {count, increaseCount} = useCounter();

  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

function Counter2() {
  const {count, increaseCount} = useCounter();

  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

export default App
