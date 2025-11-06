import { useState, useEffect } from "react"

// conditional rendering
function App2() {
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(function() {
    setInterval(function() {
        setCounterVisible(c => !c)
    }, 5000);
  }, [])
    
  return (
    <div>
      hi
      {/* {counterVisible ? <Counter/> : null} */}
      {counterVisible && <Counter/>}
      hello
    </div>
  )
}

// here we have started a interval on mount , but didn't cleaned it up on unmounting, so, even when component is not rendered the interval is running
function Counter() {
  const[count, setCount] = useState(0);

  useEffect(function() {
    // this will run when mounts 
    console.log("On mounts");
    let clock = setInterval(() => {
        console.log("from inside setInterval");
      setCount(c => c + 1); 
    }, 1000);

    // this will run when it unmounts, this is known as cleanup
    return function() { 
        console.log("on unmount");
        clearInterval(clock);
    }
  }, []); //only when dependency is empty, this mount and unmount works here

  function increaseCount() { 
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <h1 id="text"> {count} </h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <button onClick={resetCount}>reset Count</button>
    </div>
  )
}

export default App2


// so , basically the code we write in useEffect is used at the time of mounting and ignored during re-rendering and the function we return in useEffect is called at the time of unmounting