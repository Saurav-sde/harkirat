import { useState, useEffect } from "react"
function App() {
  let counterVisible = true;
  return (
    <div>
      {counterVisible ? <Counter/> : null}
      {counterVisible && <Counter/>}
    </div>
  )
}

// mounting, re-rendering, unmounting
function Counter() {
  const[count, setCount] = useState(0);

  // i want to increase the count every sec, but it is flashing our UI
  // setInterval(() => {
  //   setCount(count+1)
  // }, 1000);

/*
  // guard our setInterval from re-rendering
  useEffect(function() {
    setInterval(() => {
      // setCount(count+1); // it can't changes because there is no dependency , 
      setCount(function(currentVal) { // so, we have to do something like this 
        return currentVal + 1;
      })
      // setCount(count => count + 1)
    }, 1000);
  }, []);
*/
 
  useEffect(function() {
    setInterval(() => {
      setCount(count+1); 
    }, 1000);
  }, [count]); // dependency, cleanup

  function increaseCount() {
    // count = count + 1; // we can do this but it not re-render 
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

export default App
