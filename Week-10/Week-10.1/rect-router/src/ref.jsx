
// useRef 
// reference to a value, such that when u change the value , the component DOESN'T RE-RENDER



// i want that when user clicks on submit and nothing is in both input fields , i want that cursor should focus on the input box

import { useRef, useState } from "react"

function Ref() {
    // it is worse way to achieve that goal
    // function focusOnSubmit() {
    //     document.getElementById("name").focus()
    // }
    const inputRef = useRef();
    function focusOnSubmit() {
        inputRef.current.focus();
    }

    return (
        <div>
            signup
            <input ref={inputRef} id="name" type="text" />
            <input  type="text" />
            <button onClick={focusOnSubmit}>submit</button>
        </div>
    )
}


// building a clock with start and stop button
function Clock() {
    const [currCount, setCurrCount] = useState(1);
    // let timer = 0; // but this also not work, as on every re render the timer gets intialised with 0 and setInterval gets called on 0, instead of the interval ID

    const [timer,setTimer] = useState(0); // instead of oridinary variable we have taken state variable
    // but this will an extra re render as timer gets started after a sec, and also we are not using this varible any where in the return things (JSX) means dynamic UI

    const timerRef = useRef();
    function startClock() { 
        // if we do like this i will lost the timer variable, i can't used in stopClock to clear the interval
        /* 
            let timer = setInterval(function() {
                setCurrCount(c => c + 1);
            }, 1000)
        */
        /*
            let value = setInterval(function() {
                setCurrCount(c => c + 1);
            }, 1000);
            setTimer(value);
        */

        let value = setInterval(function() {
            setCurrCount(c => c + 1);
        }, 1000);
        timerRef.current = value;
    }

    function stopClock() {
        clearInterval(timerRef.current);
    }

    return (
        <div>
            {currCount}
            <br />
            <button onClick={startClock}>START</button>
            <button onClick={stopClock}>STOP</button>
        </div>
    )
}


// export default Ref;
export default Clock;