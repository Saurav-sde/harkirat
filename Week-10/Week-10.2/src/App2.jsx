/*
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react'

const BulbContext = createContext(); // step1: Define the context


function App() {
    const [bulbOn, setBulbOn] = useState(true); 

    return (
        <div>
            <BulbContext.Provider value={{ // step2: provide the context
                bulbOn: bulbOn,
                setBulbOn: setBulbOn
            }}>
                <Light/>
            </BulbContext.Provider>
        </div>
    )
}

function Light() {
    return (
        <div>
            <LightBulb />
            <LightSwitch />
        </div>
    )
}


function LightBulb({bulbOn}) {
    const {bulbOn} = useContext(BulbContext); // step3: consume the context
    return (
        <div>
        { bulbOn ? "Bulb on" : "Bulb off" }
        </div>
    )
}

function LightSwitch({bulbOn, setBulbOn}) {
    const {bulbOn, setBulbOn} = useContext(BulbContext);
    function toggle() {
        setBulbOn(!bulbOn)
    }
    return (
        <div>
        <button onClick={toggle}>Toggle the Bulb</button>
        </div>
    )
}

export default App
*/



import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react'

const BulbContext = createContext(); // step1: Define the context

// creating a separate file, instead of exposing all these things there, we will hide this from main logic
// now we provide this to component, so that they and their descendents will use this
function BulbProvider({children}) {
    const [bulbOn, setBulbOn] = useState(true); 
    return <BulbContext.Provider value={{ 
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
    }}>
        {children}
    </BulbContext.Provider>
}


function App2() {

    return (
        <div>
            <BulbProvider> 
                <Light/>
            </BulbProvider>
        </div>
    )
}

function Light() {
    return (
        <div>
            <LightBulb />
            <LightSwitch />
        </div>
    )
}


function LightBulb() {
    const {bulbOn} = useContext(BulbContext); // step3: consume the context
    return (
        <div>
        { bulbOn ? "Bulb on" : "Bulb off" }
        </div>
    )
}

function LightSwitch() {
    const {bulbOn, setBulbOn} = useContext(BulbContext);
    function toggle() {
        setBulbOn(!bulbOn)
    }
    return (
        <div>
        <button onClick={toggle}>Toggle the Bulb</button>
        </div>
    )
}

export default App2
