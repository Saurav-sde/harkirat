import React, {createContext, useContext, useState} from "react";

const CountContext = createContext();

function CountContextProvider ({children}) {
    const [count, setCount] = useState(1);

    return (
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
}

function Parent() {
    return (
        <CountContextProvider>
            <Increase/>
            <Decrease/>
            <Value/>
        </CountContextProvider>
    )
}


function Increase() {
    const {setCount} = useContext(CountContext);
    return (
        <button onClick={() => setCount(count => count + 1)}>
            Increase
        </button>
    )
}


function Decrease() {
    const {setCount} = useContext(CountContext);
    return (
        <button onClick={() => setCount(count => count - 1)}>
            Decrease
        </button>
    )
}


function Value() {
    const {count} = useContext(CountContext);
    return (
        <p>
            Count: {count}
        </p>
    )
}


const App3 = () => {
    return (
        <div>
            <Parent/>
        </div>
    )
}

export default App3;


// We move from React’s built-in Context API to external state-management libraries like **Zustand**, **Redux**, or **Jotai** mainly to improve **performance and scalability**. In Context, every time the value provided by a context changes, **all components consuming that context re-render**, even if they don’t directly depend on the updated part of the state. This happens because React compares context values by reference, so a new object (like `{count, setCount}`) always triggers updates across all consumers. In small apps, this is fine, but in larger projects it causes unnecessary re-renders, wasted computation, and poor user experience. External libraries solve this by using **fine-grained subscriptions**—only components that rely on the changed state are re-rendered. They also provide cleaner APIs for organizing global state, predictable updates, middleware support (like persistence or devtools), and better performance. Hence, as an application grows, developers adopt these libraries to achieve **efficient, predictable, and maintainable global state management** beyond what React Context can easily handle.
